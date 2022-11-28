import { SpeakeasyBase } from "../../../internal/utils";
import { LinkedLedgerAccountInput } from "./linkedledgeraccount";
import { CurrencyEnum } from "./currencyenum";
import { LinkedCustomerInput } from "./linkedcustomer";
import { LinkedSupplierInput } from "./linkedsupplier";
import { LinkedLedgerAccount } from "./linkedledgeraccount";
import { LinkedCustomer } from "./linkedcustomer";
import { LinkedSupplier } from "./linkedsupplier";
export declare class PaymentAllocationsInput extends SpeakeasyBase {
    amount?: number;
    id?: string;
    type?: PaymentAllocationsAllocationTypeEnum;
}
export declare enum PaymentAllocationsAllocationTypeEnum {
    Invoice = "invoice",
    Order = "order",
    Expense = "expense",
    CreditMemo = "credit_memo",
    OverPayment = "over_payment",
    PrePayment = "pre_payment"
}
export declare class PaymentAllocations extends SpeakeasyBase {
    amount?: number;
    code?: string;
    id?: string;
    type?: PaymentAllocationsAllocationTypeEnum;
}
export declare enum PaymentPaymentStatusEnum {
    Authorised = "authorised",
    Paid = "paid",
    Voided = "voided",
    Deleted = "deleted"
}
export declare enum PaymentPaymentTypeEnum {
    AccountsReceivable = "accounts_receivable",
    AccountsPayable = "accounts_payable",
    AccountsReceivableCredit = "accounts_receivable_credit",
    AccountsPayableCredit = "accounts_payable_credit",
    AccountsReceivableOverpayment = "accounts_receivable_overpayment",
    AccountsPayableOverpayment = "accounts_payable_overpayment",
    AccountsReceivablePrepayment = "accounts_receivable_prepayment",
    AccountsPayablePrepayment = "accounts_payable_prepayment"
}
export declare class PaymentInput extends SpeakeasyBase {
    account?: LinkedLedgerAccountInput;
    accountsReceivableAccountId?: string;
    accountsReceivableAccountType?: string;
    allocations?: PaymentAllocationsInput[];
    currency?: CurrencyEnum;
    currencyRate?: number;
    customer?: LinkedCustomerInput;
    displayId?: string;
    note?: string;
    paymentMethod?: string;
    paymentMethodReference?: string;
    reconciled?: boolean;
    reference?: string;
    rowVersion?: string;
    status?: PaymentPaymentStatusEnum;
    supplier?: LinkedSupplierInput;
    totalAmount: number;
    transactionDate: Date;
    type?: PaymentPaymentTypeEnum;
}
export declare class Payment extends SpeakeasyBase {
    account?: LinkedLedgerAccount;
    accountsReceivableAccountId?: string;
    accountsReceivableAccountType?: string;
    allocations?: PaymentAllocations[];
    createdAt?: Date;
    createdBy?: string;
    currency?: CurrencyEnum;
    currencyRate?: number;
    customer?: LinkedCustomer;
    displayId?: string;
    downstreamId?: string;
    id?: string;
    note?: string;
    paymentMethod?: string;
    paymentMethodReference?: string;
    reconciled?: boolean;
    reference?: string;
    rowVersion?: string;
    status?: PaymentPaymentStatusEnum;
    supplier?: LinkedSupplier;
    totalAmount: number;
    transactionDate: Date;
    type?: PaymentPaymentTypeEnum;
    updatedAt?: Date;
    updatedBy?: string;
}
