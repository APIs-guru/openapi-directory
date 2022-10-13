package shared

import (
	"time"
)

type PosPaymentBankAccountAchDetails struct {
	AccountNumberSuffix *string `json:"account_number_suffix"`
	AccountType         *string `json:"account_type"`
	RoutingNumber       *string `json:"routing_number"`
}

type PosPaymentBankAccountBankAccount struct {
	AccountOwnershipType *string                          `json:"account_ownership_type"`
	AchDetails           *PosPaymentBankAccountAchDetails `json:"ach_details"`
	BankName             *string                          `json:"bank_name"`
	Country              *string                          `json:"country"`
	Fingerprint          *string                          `json:"fingerprint"`
	StatementDescription *string                          `json:"statement_description"`
	TransferType         *string                          `json:"transfer_type"`
}

type PosPaymentCardDetails struct {
	Card *PaymentCard `json:"card"`
}

type PosPaymentCashCashDetails struct {
	Amount           *interface{} `json:"amount"`
	ChargeBackAmount *interface{} `json:"charge_back_amount"`
}

type PosPaymentExternalDetailsTypeEnum string

const (
	PosPaymentExternalDetailsTypeEnumCheck         PosPaymentExternalDetailsTypeEnum = "check"
	PosPaymentExternalDetailsTypeEnumBankTransfer  PosPaymentExternalDetailsTypeEnum = "bank_transfer"
	PosPaymentExternalDetailsTypeEnumOtherGiftCard PosPaymentExternalDetailsTypeEnum = "other_gift_card"
	PosPaymentExternalDetailsTypeEnumCrypto        PosPaymentExternalDetailsTypeEnum = "crypto"
	PosPaymentExternalDetailsTypeEnumSquareCash    PosPaymentExternalDetailsTypeEnum = "square_cash"
	PosPaymentExternalDetailsTypeEnumSocial        PosPaymentExternalDetailsTypeEnum = "social"
	PosPaymentExternalDetailsTypeEnumExternal      PosPaymentExternalDetailsTypeEnum = "external"
	PosPaymentExternalDetailsTypeEnumEmoney        PosPaymentExternalDetailsTypeEnum = "emoney"
	PosPaymentExternalDetailsTypeEnumCard          PosPaymentExternalDetailsTypeEnum = "card"
	PosPaymentExternalDetailsTypeEnumStoredBalance PosPaymentExternalDetailsTypeEnum = "stored_balance"
	PosPaymentExternalDetailsTypeEnumFoodVoucher   PosPaymentExternalDetailsTypeEnum = "food_voucher"
	PosPaymentExternalDetailsTypeEnumOther         PosPaymentExternalDetailsTypeEnum = "other"
)

type PosPaymentExternalDetails struct {
	Source          string                            `json:"source"`
	SourceFeeAmount *float64                          `json:"source_fee_amount"`
	SourceID        *string                           `json:"source_id"`
	Type            PosPaymentExternalDetailsTypeEnum `json:"type"`
}

type PosPaymentSourceEnum string

const (
	PosPaymentSourceEnumCard        PosPaymentSourceEnum = "card"
	PosPaymentSourceEnumBankAccount PosPaymentSourceEnum = "bank_account"
	PosPaymentSourceEnumWallet      PosPaymentSourceEnum = "wallet"
	PosPaymentSourceEnumBnpl        PosPaymentSourceEnum = "bnpl"
	PosPaymentSourceEnumCash        PosPaymentSourceEnum = "cash"
	PosPaymentSourceEnumExternal    PosPaymentSourceEnum = "external"
	PosPaymentSourceEnumOther       PosPaymentSourceEnum = "other"
)

type PosPaymentStatusStatusEnum string

const (
	PosPaymentStatusStatusEnumApproved  PosPaymentStatusStatusEnum = "approved"
	PosPaymentStatusStatusEnumPending   PosPaymentStatusStatusEnum = "pending"
	PosPaymentStatusStatusEnumCompleted PosPaymentStatusStatusEnum = "completed"
	PosPaymentStatusStatusEnumCanceled  PosPaymentStatusStatusEnum = "canceled"
	PosPaymentStatusStatusEnumFailed    PosPaymentStatusStatusEnum = "failed"
	PosPaymentStatusStatusEnumOther     PosPaymentStatusStatusEnum = "other"
)

type PosPaymentWalletStatusEnum string

const (
	PosPaymentWalletStatusEnumAuthorized PosPaymentWalletStatusEnum = "authorized"
	PosPaymentWalletStatusEnumCaptured   PosPaymentWalletStatusEnum = "captured"
	PosPaymentWalletStatusEnumVoided     PosPaymentWalletStatusEnum = "voided"
	PosPaymentWalletStatusEnumFailed     PosPaymentWalletStatusEnum = "failed"
	PosPaymentWalletStatusEnumOther      PosPaymentWalletStatusEnum = "other"
)

type PosPaymentWalletWalletDetails struct {
	Status *PosPaymentWalletStatusEnum `json:"status"`
}

type PosPayment struct {
	Amount               float64                           `json:"amount"`
	AppFee               *float64                          `json:"app_fee"`
	Approved             *float64                          `json:"approved"`
	BankAccount          *PosPaymentBankAccountBankAccount `json:"bank_account"`
	CardDetails          *PosPaymentCardDetails            `json:"card_details"`
	Cash                 *PosPaymentCashCashDetails        `json:"cash"`
	ChangeBackCashAmount *float64                          `json:"change_back_cash_amount"`
	CreatedAt            *time.Time                        `json:"created_at"`
	CreatedBy            *string                           `json:"created_by"`
	Currency             CurrencyEnum                      `json:"currency"`
	CustomerID           string                            `json:"customer_id"`
	DeviceID             *string                           `json:"device_id"`
	EmployeeID           *string                           `json:"employee_id"`
	ExternalDetails      *PosPaymentExternalDetails        `json:"external_details"`
	ExternalPaymentID    *string                           `json:"external_payment_id"`
	ID                   *string                           `json:"id"`
	IdempotencyKey       *string                           `json:"idempotency_key"`
	LocationID           *string                           `json:"location_id"`
	MerchantID           *string                           `json:"merchant_id"`
	OrderID              string                            `json:"order_id"`
	ProcessingFees       []interface{}                     `json:"processing_fees"`
	Refunded             *float64                          `json:"refunded"`
	ServiceCharges       []ServiceCharge                   `json:"service_charges"`
	Source               *PosPaymentSourceEnum             `json:"source"`
	SourceID             string                            `json:"source_id"`
	Status               *PosPaymentStatusStatusEnum       `json:"status"`
	Tax                  *float64                          `json:"tax"`
	TenderID             string                            `json:"tender_id"`
	Tip                  *float64                          `json:"tip"`
	Total                *float64                          `json:"total"`
	UpdatedAt            *time.Time                        `json:"updated_at"`
	UpdatedBy            *string                           `json:"updated_by"`
	Wallet               *PosPaymentWalletWalletDetails    `json:"wallet"`
}
