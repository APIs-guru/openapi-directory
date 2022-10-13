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
	Amount *float64                                  `json:"amount"`
	Code   *string                                   `json:"code"`
	ID     *string                                   `json:"id"`
	Type   *PaymentAllocationsTypeAllocationTypeEnum `json:"type"`
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
	Account                       *LinkedLedgerAccount            `json:"account"`
	AccountsReceivableAccountID   *string                         `json:"accounts_receivable_account_id"`
	AccountsReceivableAccountType *string                         `json:"accounts_receivable_account_type"`
	Allocations                   []PaymentAllocations            `json:"allocations"`
	CreatedAt                     *time.Time                      `json:"created_at"`
	CreatedBy                     *string                         `json:"created_by"`
	Currency                      *CurrencyEnum                   `json:"currency"`
	CurrencyRate                  *float64                        `json:"currency_rate"`
	Customer                      *LinkedCustomer                 `json:"customer"`
	DisplayID                     *string                         `json:"display_id"`
	ID                            *string                         `json:"id"`
	Note                          *string                         `json:"note"`
	PaymentMethod                 *string                         `json:"payment_method"`
	PaymentMethodReference        *string                         `json:"payment_method_reference"`
	Reconciled                    *bool                           `json:"reconciled"`
	Reference                     *string                         `json:"reference"`
	RowVersion                    *string                         `json:"row_version"`
	Status                        *PaymentStatusPaymentStatusEnum `json:"status"`
	TotalAmount                   float64                         `json:"total_amount"`
	TransactionDate               time.Time                       `json:"transaction_date"`
	Type                          *PaymentTypePaymentTypeEnum     `json:"type"`
	UpdatedAt                     *time.Time                      `json:"updated_at"`
	UpdatedBy                     *string                         `json:"updated_by"`
}
