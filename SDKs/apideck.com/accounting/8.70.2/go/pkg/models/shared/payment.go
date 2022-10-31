package shared

import (
"time")


type PaymentAllocationsAllocationTypeEnum string

const (
    PaymentAllocationsAllocationTypeEnumInvoice PaymentAllocationsAllocationTypeEnum = "invoice"
PaymentAllocationsAllocationTypeEnumOrder PaymentAllocationsAllocationTypeEnum = "order"
PaymentAllocationsAllocationTypeEnumExpense PaymentAllocationsAllocationTypeEnum = "expense"
PaymentAllocationsAllocationTypeEnumCreditMemo PaymentAllocationsAllocationTypeEnum = "credit_memo"
PaymentAllocationsAllocationTypeEnumOverPayment PaymentAllocationsAllocationTypeEnum = "over_payment"
PaymentAllocationsAllocationTypeEnumPrePayment PaymentAllocationsAllocationTypeEnum = "pre_payment"
)


type PaymentAllocations struct {
    Amount *float64 `json:"amount,omitempty"`
    Code *string `json:"code,omitempty"`
    ID *string `json:"id,omitempty"`
    Type *PaymentAllocationsAllocationTypeEnum `json:"type,omitempty"`
    
}


type PaymentPaymentStatusEnum string

const (
    PaymentPaymentStatusEnumAuthorised PaymentPaymentStatusEnum = "authorised"
PaymentPaymentStatusEnumPaid PaymentPaymentStatusEnum = "paid"
PaymentPaymentStatusEnumVoided PaymentPaymentStatusEnum = "voided"
PaymentPaymentStatusEnumDeleted PaymentPaymentStatusEnum = "deleted"
)



type PaymentPaymentTypeEnum string

const (
    PaymentPaymentTypeEnumAccountsReceivable PaymentPaymentTypeEnum = "accounts_receivable"
PaymentPaymentTypeEnumAccountsPayable PaymentPaymentTypeEnum = "accounts_payable"
PaymentPaymentTypeEnumAccountsReceivableCredit PaymentPaymentTypeEnum = "accounts_receivable_credit"
PaymentPaymentTypeEnumAccountsPayableCredit PaymentPaymentTypeEnum = "accounts_payable_credit"
PaymentPaymentTypeEnumAccountsReceivableOverpayment PaymentPaymentTypeEnum = "accounts_receivable_overpayment"
PaymentPaymentTypeEnumAccountsPayableOverpayment PaymentPaymentTypeEnum = "accounts_payable_overpayment"
PaymentPaymentTypeEnumAccountsReceivablePrepayment PaymentPaymentTypeEnum = "accounts_receivable_prepayment"
PaymentPaymentTypeEnumAccountsPayablePrepayment PaymentPaymentTypeEnum = "accounts_payable_prepayment"
)


type Payment struct {
    Account *LinkedLedgerAccount `json:"account,omitempty"`
    AccountsReceivableAccountID *string `json:"accounts_receivable_account_id,omitempty"`
    AccountsReceivableAccountType *string `json:"accounts_receivable_account_type,omitempty"`
    Allocations []PaymentAllocations `json:"allocations,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    CreatedBy *string `json:"created_by,omitempty"`
    Currency *CurrencyEnum `json:"currency,omitempty"`
    CurrencyRate *float64 `json:"currency_rate,omitempty"`
    Customer *LinkedCustomer `json:"customer,omitempty"`
    DisplayID *string `json:"display_id,omitempty"`
    ID *string `json:"id,omitempty"`
    Note *string `json:"note,omitempty"`
    PaymentMethod *string `json:"payment_method,omitempty"`
    PaymentMethodReference *string `json:"payment_method_reference,omitempty"`
    Reconciled *bool `json:"reconciled,omitempty"`
    Reference *string `json:"reference,omitempty"`
    RowVersion *string `json:"row_version,omitempty"`
    Status *PaymentPaymentStatusEnum `json:"status,omitempty"`
    TotalAmount float64 `json:"total_amount"`
    TransactionDate time.Time `json:"transaction_date"`
    Type *PaymentPaymentTypeEnum `json:"type,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    UpdatedBy *string `json:"updated_by,omitempty"`
    
}

