import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinkedLedgerAccountInput } from "./linkedledgeraccount";
import { CurrencyEnum } from "./currencyenum";
import { LinkedCustomerInput } from "./linkedcustomer";
import { LinkedSupplierInput } from "./linkedsupplier";
import { LinkedLedgerAccount } from "./linkedledgeraccount";
import { LinkedCustomer } from "./linkedcustomer";
import { LinkedSupplier } from "./linkedsupplier";



export class PaymentAllocationsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PaymentAllocationsAllocationTypeEnum;
}

export enum PaymentAllocationsAllocationTypeEnum {
    Invoice = "invoice",
    Order = "order",
    Expense = "expense",
    CreditMemo = "credit_memo",
    OverPayment = "over_payment",
    PrePayment = "pre_payment"
}


export class PaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PaymentAllocationsAllocationTypeEnum;
}

export enum PaymentPaymentStatusEnum {
    Authorised = "authorised",
    Paid = "paid",
    Voided = "voided",
    Deleted = "deleted"
}

export enum PaymentPaymentTypeEnum {
    AccountsReceivable = "accounts_receivable",
    AccountsPayable = "accounts_payable",
    AccountsReceivableCredit = "accounts_receivable_credit",
    AccountsPayableCredit = "accounts_payable_credit",
    AccountsReceivableOverpayment = "accounts_receivable_overpayment",
    AccountsPayableOverpayment = "accounts_payable_overpayment",
    AccountsReceivablePrepayment = "accounts_receivable_prepayment",
    AccountsPayablePrepayment = "accounts_payable_prepayment"
}


export class PaymentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: LinkedLedgerAccountInput;

  @SpeakeasyMetadata({ data: "json, name=accounts_receivable_account_id" })
  accountsReceivableAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=accounts_receivable_account_type" })
  accountsReceivableAccountType?: string;

  @SpeakeasyMetadata({ data: "json, name=allocations", elemType: PaymentAllocationsInput })
  allocations?: PaymentAllocationsInput[];

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=currency_rate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: LinkedCustomerInput;

  @SpeakeasyMetadata({ data: "json, name=display_id" })
  displayId?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=payment_method" })
  paymentMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=payment_method_reference" })
  paymentMethodReference?: string;

  @SpeakeasyMetadata({ data: "json, name=reconciled" })
  reconciled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PaymentPaymentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=supplier" })
  supplier?: LinkedSupplierInput;

  @SpeakeasyMetadata({ data: "json, name=total_amount" })
  totalAmount: number;

  @SpeakeasyMetadata({ data: "json, name=transaction_date" })
  transactionDate: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PaymentPaymentTypeEnum;
}


export class Payment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: LinkedLedgerAccount;

  @SpeakeasyMetadata({ data: "json, name=accounts_receivable_account_id" })
  accountsReceivableAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=accounts_receivable_account_type" })
  accountsReceivableAccountType?: string;

  @SpeakeasyMetadata({ data: "json, name=allocations", elemType: PaymentAllocations })
  allocations?: PaymentAllocations[];

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=currency_rate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: LinkedCustomer;

  @SpeakeasyMetadata({ data: "json, name=display_id" })
  displayId?: string;

  @SpeakeasyMetadata({ data: "json, name=downstream_id" })
  downstreamId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=payment_method" })
  paymentMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=payment_method_reference" })
  paymentMethodReference?: string;

  @SpeakeasyMetadata({ data: "json, name=reconciled" })
  reconciled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PaymentPaymentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=supplier" })
  supplier?: LinkedSupplier;

  @SpeakeasyMetadata({ data: "json, name=total_amount" })
  totalAmount: number;

  @SpeakeasyMetadata({ data: "json, name=transaction_date" })
  transactionDate: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PaymentPaymentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
