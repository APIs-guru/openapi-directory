import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LinkedLedgerAccount } from "./linkedledgeraccount";
import { CurrencyEnum } from "./currencyenum";
import { LinkedCustomer } from "./linkedcustomer";

export enum PaymentAllocationsAllocationTypeEnum {
    Invoice = "invoice"
,    Order = "order"
,    Expense = "expense"
,    CreditMemo = "credit_memo"
,    OverPayment = "over_payment"
,    PrePayment = "pre_payment"
}


export class PaymentAllocations extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: PaymentAllocationsAllocationTypeEnum;
}

export enum PaymentPaymentStatusEnum {
    Authorised = "authorised"
,    Paid = "paid"
,    Voided = "voided"
,    Deleted = "deleted"
}

export enum PaymentPaymentTypeEnum {
    AccountsReceivable = "accounts_receivable"
,    AccountsPayable = "accounts_payable"
,    AccountsReceivableCredit = "accounts_receivable_credit"
,    AccountsPayableCredit = "accounts_payable_credit"
,    AccountsReceivableOverpayment = "accounts_receivable_overpayment"
,    AccountsPayableOverpayment = "accounts_payable_overpayment"
,    AccountsReceivablePrepayment = "accounts_receivable_prepayment"
,    AccountsPayablePrepayment = "accounts_payable_prepayment"
}


export class Payment extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account?: LinkedLedgerAccount;

  @Metadata({ data: "json, name=accounts_receivable_account_id" })
  accountsReceivableAccountId?: string;

  @Metadata({ data: "json, name=accounts_receivable_account_type" })
  accountsReceivableAccountType?: string;

  @Metadata({ data: "json, name=allocations", elemType: shared.PaymentAllocations })
  allocations?: PaymentAllocations[];

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @Metadata({ data: "json, name=currency_rate" })
  currencyRate?: number;

  @Metadata({ data: "json, name=customer" })
  customer?: LinkedCustomer;

  @Metadata({ data: "json, name=display_id" })
  displayId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=payment_method" })
  paymentMethod?: string;

  @Metadata({ data: "json, name=payment_method_reference" })
  paymentMethodReference?: string;

  @Metadata({ data: "json, name=reconciled" })
  reconciled?: boolean;

  @Metadata({ data: "json, name=reference" })
  reference?: string;

  @Metadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @Metadata({ data: "json, name=status" })
  status?: PaymentPaymentStatusEnum;

  @Metadata({ data: "json, name=total_amount" })
  totalAmount: number;

  @Metadata({ data: "json, name=transaction_date" })
  transactionDate: Date;

  @Metadata({ data: "json, name=type" })
  type?: PaymentPaymentTypeEnum;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
