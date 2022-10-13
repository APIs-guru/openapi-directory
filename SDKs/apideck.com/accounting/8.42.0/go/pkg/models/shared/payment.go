package shared

import (
	"time"
)

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
	Allocations                   []interface{}                   `json:"allocations"`
	CreatedAt                     *time.Time                      `json:"created_at"`
	Currency                      *CurrencyEnum                   `json:"currency"`
	CurrencyRate                  *float64                        `json:"currency_rate"`
	Customer                      *LinkedCustomer                 `json:"customer"`
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
}
