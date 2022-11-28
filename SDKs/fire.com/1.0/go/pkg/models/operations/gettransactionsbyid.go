package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetTransactionsByIDPathParams struct {
	Ican int64 `pathParam:"style=simple,explode=false,name=ican"`
}

type GetTransactionsByIDTransactionRelatedCard struct {
	Alias              *string    `json:"alias,omitempty"`
	CardID             *float64   `json:"cardId,omitempty"`
	EmbossBusinessName *string    `json:"embossBusinessName,omitempty"`
	EmbossCardName     *string    `json:"embossCardName,omitempty"`
	ExpiryDate         *time.Time `json:"expiryDate,omitempty"`
	MaskedPan          *string    `json:"maskedPan,omitempty"`
	Provider           *string    `json:"provider,omitempty"`
}

type GetTransactionsByIDTransactionFxTrade struct {
	BuyAmount    *int64  `json:"buyAmount,omitempty"`
	BuyCurrency  *string `json:"buyCurrency,omitempty"`
	FixedSide    *string `json:"fixedSide,omitempty"`
	Rate4d       *int64  `json:"rate4d,omitempty"`
	SellAmount   *int64  `json:"sellAmount,omitempty"`
	SellCurrency *string `json:"sellCurrency,omitempty"`
}

type GetTransactionsByIDTransactionRelatedPartyRelatedPartyFireAccountAccount struct {
	AccountNumber *string `json:"accountNumber,omitempty"`
	Alias         *string `json:"alias,omitempty"`
	Bic           *string `json:"bic,omitempty"`
	Iban          *string `json:"iban,omitempty"`
	ID            *int64  `json:"id,omitempty"`
	Nsc           *string `json:"nsc,omitempty"`
}

type GetTransactionsByIDTransactionRelatedPartyRelatedPartyFireAccountTypeEnum string

const (
	GetTransactionsByIDTransactionRelatedPartyRelatedPartyFireAccountTypeEnumFireAccount GetTransactionsByIDTransactionRelatedPartyRelatedPartyFireAccountTypeEnum = "FIRE_ACCOUNT"
)

type GetTransactionsByIDTransactionRelatedPartyRelatedPartyFireAccount struct {
	Account *GetTransactionsByIDTransactionRelatedPartyRelatedPartyFireAccountAccount  `json:"account,omitempty"`
	Type    *GetTransactionsByIDTransactionRelatedPartyRelatedPartyFireAccountTypeEnum `json:"type,omitempty"`
}

type GetTransactionsByIDTransactionRelatedPartyRelatedPartyExternalAccountAccount struct {
	AccountNumber *string `json:"accountNumber,omitempty"`
	Alias         *string `json:"alias,omitempty"`
	Bic           *string `json:"bic,omitempty"`
	Iban          *string `json:"iban,omitempty"`
	ID            *int64  `json:"id,omitempty"`
	Nsc           *string `json:"nsc,omitempty"`
}

type GetTransactionsByIDTransactionRelatedPartyRelatedPartyExternalAccountTypeEnum string

const (
	GetTransactionsByIDTransactionRelatedPartyRelatedPartyExternalAccountTypeEnumExternalAccount GetTransactionsByIDTransactionRelatedPartyRelatedPartyExternalAccountTypeEnum = "EXTERNAL_ACCOUNT"
)

type GetTransactionsByIDTransactionRelatedPartyRelatedPartyExternalAccount struct {
	Account *GetTransactionsByIDTransactionRelatedPartyRelatedPartyExternalAccountAccount  `json:"account,omitempty"`
	Type    *GetTransactionsByIDTransactionRelatedPartyRelatedPartyExternalAccountTypeEnum `json:"type,omitempty"`
}

type GetTransactionsByIDTransactionRelatedPartyRelatedPartyPayeeAccount struct {
	AccountNumber *string `json:"accountNumber,omitempty"`
	Alias         *string `json:"alias,omitempty"`
	Bic           *string `json:"bic,omitempty"`
	Iban          *string `json:"iban,omitempty"`
	ID            *int64  `json:"id,omitempty"`
	Nsc           *string `json:"nsc,omitempty"`
}

type GetTransactionsByIDTransactionRelatedPartyRelatedPartyPayeeTypeEnum string

const (
	GetTransactionsByIDTransactionRelatedPartyRelatedPartyPayeeTypeEnumWithdrawalAccount GetTransactionsByIDTransactionRelatedPartyRelatedPartyPayeeTypeEnum = "WITHDRAWAL_ACCOUNT"
)

type GetTransactionsByIDTransactionRelatedPartyRelatedPartyPayee struct {
	Account *GetTransactionsByIDTransactionRelatedPartyRelatedPartyPayeeAccount  `json:"account,omitempty"`
	Type    *GetTransactionsByIDTransactionRelatedPartyRelatedPartyPayeeTypeEnum `json:"type,omitempty"`
}

type GetTransactionsByIDTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant struct {
	AcquirerIDDe32      *string  `json:"acquirerIdDe32,omitempty"`
	AdditionalAmtDe54   *string  `json:"additionalAmtDe54,omitempty"`
	AdditionalDataDe124 *string  `json:"additionalDataDe124,omitempty"`
	AdditionalDataDe48  *string  `json:"additionalDataDe48,omitempty"`
	AuthCodeDe38        *string  `json:"authCodeDe38,omitempty"`
	AuthorisedByGps     *string  `json:"authorisedByGps,omitempty"`
	AvsResult           *string  `json:"avsResult,omitempty"`
	BillAmt             *float64 `json:"billAmt,omitempty"`
	BillCcy             *string  `json:"billCcy,omitempty"`
	ExpiryDate          *string  `json:"expiryDate,omitempty"`
	MccCode             *string  `json:"mccCode,omitempty"`
	MerchIDDe42         *string  `json:"merchIdDe42,omitempty"`
	MerchNameDe43       *string  `json:"merchNameDe43,omitempty"`
	MtID                *string  `json:"mtId,omitempty"`
	PosDataDe22         *string  `json:"posDataDe22,omitempty"`
	PosDataDe61         *string  `json:"posDataDe61,omitempty"`
	PosTermnlDe41       *string  `json:"posTermnlDe41,omitempty"`
	ProcCode            *string  `json:"procCode,omitempty"`
	RecordDataDe120     *string  `json:"recordDataDe120,omitempty"`
	RespCodeDe39        *string  `json:"respCodeDe39,omitempty"`
	RetRefNoDe37        *string  `json:"retRefNoDe37,omitempty"`
	StatusCode          *string  `json:"statusCode,omitempty"`
	Token               *string  `json:"token,omitempty"`
	TxnAmt4d            *float64 `json:"txnAmt4d,omitempty"`
	TxnCcy              *string  `json:"txnCcy,omitempty"`
	TxnCtry             *string  `json:"txnCtry,omitempty"`
	TxnDesc             *string  `json:"txnDesc,omitempty"`
	TxnStatCode         *string  `json:"txnStatCode,omitempty"`
	TxnType             *string  `json:"txnType,omitempty"`
}

type GetTransactionsByIDTransactionRelatedPartyRelatedPartyCardPaymentTypeEnum string

const (
	GetTransactionsByIDTransactionRelatedPartyRelatedPartyCardPaymentTypeEnumCardMerchant GetTransactionsByIDTransactionRelatedPartyRelatedPartyCardPaymentTypeEnum = "CARD_MERCHANT"
	GetTransactionsByIDTransactionRelatedPartyRelatedPartyCardPaymentTypeEnumCardAtm      GetTransactionsByIDTransactionRelatedPartyRelatedPartyCardPaymentTypeEnum = "CARD_ATM"
)

type GetTransactionsByIDTransactionRelatedPartyRelatedPartyCardPayment struct {
	CardMerchant *GetTransactionsByIDTransactionRelatedPartyRelatedPartyCardPaymentCardMerchant `json:"cardMerchant,omitempty"`
	Type         *GetTransactionsByIDTransactionRelatedPartyRelatedPartyCardPaymentTypeEnum     `json:"type,omitempty"`
}

type GetTransactionsByIDTransaction struct {
	AmountAfterCharges       *int64                                                                                                   `json:"amountAfterCharges,omitempty"`
	AmountBeforeCharges      *int64                                                                                                   `json:"amountBeforeCharges,omitempty"`
	Balance                  *int64                                                                                                   `json:"balance,omitempty"`
	Card                     *GetTransactionsByIDTransactionRelatedCard                                                               `json:"card,omitempty"`
	Currency                 *shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency `json:"currency,omitempty"`
	Date                     *time.Time                                                                                               `json:"date,omitempty"`
	DateAcknowledged         *time.Time                                                                                               `json:"dateAcknowledged,omitempty"`
	FeeAmount                *int64                                                                                                   `json:"feeAmount,omitempty"`
	FxTradeDetails           *GetTransactionsByIDTransactionFxTrade                                                                   `json:"fxTradeDetails,omitempty"`
	Ican                     *int64                                                                                                   `json:"ican,omitempty"`
	MyRef                    *string                                                                                                  `json:"myRef,omitempty"`
	PaymentRequestPublicCode *string                                                                                                  `json:"paymentRequestPublicCode,omitempty"`
	RefID                    *int64                                                                                                   `json:"refId,omitempty"`
	RelatedParty             *interface{}                                                                                             `json:"relatedParty,omitempty"`
	TaxAmount                *int64                                                                                                   `json:"taxAmount,omitempty"`
	TxnID                    *int64                                                                                                   `json:"txnId,omitempty"`
	Type                     *string                                                                                                  `json:"type,omitempty"`
}

type GetTransactionsByIDRequest struct {
	PathParams GetTransactionsByIDPathParams
}

type GetTransactionsByIDResponse struct {
	ContentType string
	StatusCode  int64
	Transaction *GetTransactionsByIDTransaction
}
