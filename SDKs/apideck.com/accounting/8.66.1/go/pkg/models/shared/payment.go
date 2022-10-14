package shared

import (
	"time"
)

type PaymentAllocationsTypeAllocationTypeEnum string

const (
	PaymentAllocationsTypeAllocationTypeEnumInvoice     PaymentAllocationsTypeAllocationTypeEnum = "invoice"
	PaymentAllocationsTypeAllocationTypeEnumOrder       PaymentAllocationsTypeAllocationTypeEnum = "order"
	PaymentAllocationsTypeAllocationTypeEnumExpense     PaymentAllocationsTypeAllocationTypeEnum = "expense"
	PaymentAllocationsTypeAllocationTypeEnumCreditMemo  PaymentAllocationsTypeAllocationTypeEnum = "credit_memo"
	PaymentAllocationsTypeAllocationTypeEnumOverPayment PaymentAllocationsTypeAllocationTypeEnum = "over_payment"
	PaymentAllocationsTypeAllocationTypeEnumPrePayment  PaymentAllocationsTypeAllocationTypeEnum = "pre_payment"
)

type PaymentAllocations struct {
	Amount *float64                                  `json:"amount,omitempty"`
	Code   *string                                   `json:"code,omitempty"`
	ID     *string                                   `json:"id,omitempty"`
	Type   *PaymentAllocationsTypeAllocationTypeEnum `json:"type,omitempty"`
}

type PaymentStatusPaymentStatusEnum string

const (
	PaymentStatusPaymentStatusEnumAuthorised PaymentStatusPaymentStatusEnum = "authorised"
	PaymentStatusPaymentStatusEnumPaid       PaymentStatusPaymentStatusEnum = "paid"
	PaymentStatusPaymentStatusEnumVoided     PaymentStatusPaymentStatusEnum = "voided"
	PaymentStatusPaymentStatusEnumDeleted    PaymentStatusPaymentStatusEnum = "deleted"
)

type PaymentTypePaymentTypeEnum string

const (
	PaymentTypePaymentTypeEnumAccountsReceivable            PaymentTypePaymentTypeEnum = "accounts_receivable"
	PaymentTypePaymentTypeEnumAccountsPayable               PaymentTypePaymentTypeEnum = "accounts_payable"
	PaymentTypePaymentTypeEnumAccountsReceivableCredit      PaymentTypePaymentTypeEnum = "accounts_receivable_credit"
	PaymentTypePaymentTypeEnumAccountsPayableCredit         PaymentTypePaymentTypeEnum = "accounts_payable_credit"
	PaymentTypePaymentTypeEnumAccountsReceivableOverpayment PaymentTypePaymentTypeEnum = "accounts_receivable_overpayment"
	PaymentTypePaymentTypeEnumAccountsPayableOverpayment    PaymentTypePaymentTypeEnum = "accounts_payable_overpayment"
	PaymentTypePaymentTypeEnumAccountsReceivablePrepayment  PaymentTypePaymentTypeEnum = "accounts_receivable_prepayment"
	PaymentTypePaymentTypeEnumAccountsPayablePrepayment     PaymentTypePaymentTypeEnum = "accounts_payable_prepayment"
)

type Payment struct {
	Account                       *LinkedLedgerAccount            `json:"account,omitempty"`
	AccountsReceivableAccountID   *string                         `json:"accounts_receivable_account_id,omitempty"`
	AccountsReceivableAccountType *string                         `json:"accounts_receivable_account_type,omitempty"`
	Allocations                   []PaymentAllocations            `json:"allocations,omitempty"`
	CreatedAt                     *time.Time                      `json:"created_at,omitempty"`
	CreatedBy                     *string                         `json:"created_by,omitempty"`
	Currency                      *CurrencyEnum                   `json:"currency,omitempty"`
	CurrencyRate                  *float64                        `json:"currency_rate,omitempty"`
	Customer                      *LinkedCustomer                 `json:"customer,omitempty"`
	DisplayID                     *string                         `json:"display_id,omitempty"`
	ID                            *string                         `json:"id,omitempty"`
	Note                          *string                         `json:"note,omitempty"`
	PaymentMethod                 *string                         `json:"payment_method,omitempty"`
	PaymentMethodReference        *string                         `json:"payment_method_reference,omitempty"`
	Reconciled                    *bool                           `json:"reconciled,omitempty"`
	Reference                     *string                         `json:"reference,omitempty"`
	RowVersion                    *string                         `json:"row_version,omitempty"`
	Status                        *PaymentStatusPaymentStatusEnum `json:"status,omitempty"`
	TotalAmount                   float64                         `json:"total_amount"`
	TransactionDate               time.Time                       `json:"transaction_date"`
	Type                          *PaymentTypePaymentTypeEnum     `json:"type,omitempty"`
	UpdatedAt                     *time.Time                      `json:"updated_at,omitempty"`
	UpdatedBy                     *string                         `json:"updated_by,omitempty"`
}
