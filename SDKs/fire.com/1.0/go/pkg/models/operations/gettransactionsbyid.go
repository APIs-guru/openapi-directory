package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetTransactionsByIDPathParams struct {
	Ican int64 `pathParam:"style=simple,explode=false,name=ican"`
}

type GetTransactionsByIDRequest struct {
	PathParams GetTransactionsByIDPathParams
}

type GetTransactionsByID200ApplicationJSONCardRelatedCard struct {
	Alias              *string    `json:"alias"`
	CardID             *float64   `json:"cardId"`
	EmbossBusinessName *string    `json:"embossBusinessName"`
	EmbossCardName     *string    `json:"embossCardName"`
	ExpiryDate         *time.Time `json:"expiryDate"`
	MaskedPan          *string    `json:"maskedPan"`
	Provider           *string    `json:"provider"`
}

type GetTransactionsByID200ApplicationJSONFxTradeDetailsFxTrade struct {
	BuyAmount    *int64  `json:"buyAmount"`
	BuyCurrency  *string `json:"buyCurrency"`
	FixedSide    *string `json:"fixedSide"`
	Rate4d       *int64  `json:"rate4d"`
	SellAmount   *int64  `json:"sellAmount"`
	SellCurrency *string `json:"sellCurrency"`
}

type GetTransactionsByID200ApplicationJSONRelatedParty1Account struct {
	AccountNumber *string `json:"accountNumber"`
	Alias         *string `json:"alias"`
	Bic           *string `json:"bic"`
	Iban          *string `json:"iban"`
	ID            *int64  `json:"id"`
	Nsc           *string `json:"nsc"`
}

type GetTransactionsByID200ApplicationJSONRelatedParty1TypeEnum string

const (
	GetTransactionsByID200ApplicationJSONRelatedParty1TypeEnumFireAccount GetTransactionsByID200ApplicationJSONRelatedParty1TypeEnum = "FIRE_ACCOUNT"
)

type GetTransactionsByID200ApplicationJSONRelatedParty1RelatedPartyFireAccount struct {
	Account *GetTransactionsByID200ApplicationJSONRelatedParty1Account  `json:"account"`
	Type    *GetTransactionsByID200ApplicationJSONRelatedParty1TypeEnum `json:"type"`
}

type GetTransactionsByID200ApplicationJSONRelatedParty2Account struct {
	AccountNumber *string `json:"accountNumber"`
	Alias         *string `json:"alias"`
	Bic           *string `json:"bic"`
	Iban          *string `json:"iban"`
	ID            *int64  `json:"id"`
	Nsc           *string `json:"nsc"`
}

type GetTransactionsByID200ApplicationJSONRelatedParty2TypeEnum string

const (
	GetTransactionsByID200ApplicationJSONRelatedParty2TypeEnumExternalAccount GetTransactionsByID200ApplicationJSONRelatedParty2TypeEnum = "EXTERNAL_ACCOUNT"
)

type GetTransactionsByID200ApplicationJSONRelatedParty2RelatedPartyExternalAccount struct {
	Account *GetTransactionsByID200ApplicationJSONRelatedParty2Account  `json:"account"`
	Type    *GetTransactionsByID200ApplicationJSONRelatedParty2TypeEnum `json:"type"`
}

type GetTransactionsByID200ApplicationJSONRelatedParty3Account struct {
	AccountNumber *string `json:"accountNumber"`
	Alias         *string `json:"alias"`
	Bic           *string `json:"bic"`
	Iban          *string `json:"iban"`
	ID            *int64  `json:"id"`
	Nsc           *string `json:"nsc"`
}

type GetTransactionsByID200ApplicationJSONRelatedParty3TypeEnum string

const (
	GetTransactionsByID200ApplicationJSONRelatedParty3TypeEnumWithdrawalAccount GetTransactionsByID200ApplicationJSONRelatedParty3TypeEnum = "WITHDRAWAL_ACCOUNT"
)

type GetTransactionsByID200ApplicationJSONRelatedParty3RelatedPartyPayee struct {
	Account *GetTransactionsByID200ApplicationJSONRelatedParty3Account  `json:"account"`
	Type    *GetTransactionsByID200ApplicationJSONRelatedParty3TypeEnum `json:"type"`
}

type GetTransactionsByID200ApplicationJSONRelatedParty4CardMerchant struct {
	AcquirerIDDe32      *string  `json:"acquirerIdDe32"`
	AdditionalAmtDe54   *string  `json:"additionalAmtDe54"`
	AdditionalDataDe124 *string  `json:"additionalDataDe124"`
	AdditionalDataDe48  *string  `json:"additionalDataDe48"`
	AuthCodeDe38        *string  `json:"authCodeDe38"`
	AuthorisedByGps     *string  `json:"authorisedByGps"`
	AvsResult           *string  `json:"avsResult"`
	BillAmt             *float64 `json:"billAmt"`
	BillCcy             *string  `json:"billCcy"`
	ExpiryDate          *string  `json:"expiryDate"`
	MccCode             *string  `json:"mccCode"`
	MerchIDDe42         *string  `json:"merchIdDe42"`
	MerchNameDe43       *string  `json:"merchNameDe43"`
	MtID                *string  `json:"mtId"`
	PosDataDe22         *string  `json:"posDataDe22"`
	PosDataDe61         *string  `json:"posDataDe61"`
	PosTermnlDe41       *string  `json:"posTermnlDe41"`
	ProcCode            *string  `json:"procCode"`
	RecordDataDe120     *string  `json:"recordDataDe120"`
	RespCodeDe39        *string  `json:"respCodeDe39"`
	RetRefNoDe37        *string  `json:"retRefNoDe37"`
	StatusCode          *string  `json:"statusCode"`
	Token               *string  `json:"token"`
	TxnAmt4d            *float64 `json:"txnAmt4d"`
	TxnCcy              *string  `json:"txnCcy"`
	TxnCtry             *string  `json:"txnCtry"`
	TxnDesc             *string  `json:"txnDesc"`
	TxnStatCode         *string  `json:"txnStatCode"`
	TxnType             *string  `json:"txnType"`
}

type GetTransactionsByID200ApplicationJSONRelatedParty4TypeEnum string

const (
	GetTransactionsByID200ApplicationJSONRelatedParty4TypeEnumCardMerchant GetTransactionsByID200ApplicationJSONRelatedParty4TypeEnum = "CARD_MERCHANT"
	GetTransactionsByID200ApplicationJSONRelatedParty4TypeEnumCardAtm      GetTransactionsByID200ApplicationJSONRelatedParty4TypeEnum = "CARD_ATM"
)

type GetTransactionsByID200ApplicationJSONRelatedParty4RelatedPartyCardPayment struct {
	CardMerchant *GetTransactionsByID200ApplicationJSONRelatedParty4CardMerchant `json:"cardMerchant"`
	Type         *GetTransactionsByID200ApplicationJSONRelatedParty4TypeEnum     `json:"type"`
}

type GetTransactionsByID200ApplicationJSONTransaction struct {
	AmountAfterCharges       *int64                                                                                                   `json:"amountAfterCharges"`
	AmountBeforeCharges      *int64                                                                                                   `json:"amountBeforeCharges"`
	Balance                  *int64                                                                                                   `json:"balance"`
	Card                     *GetTransactionsByID200ApplicationJSONCardRelatedCard                                                    `json:"card"`
	Currency                 *shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency `json:"currency"`
	Date                     *time.Time                                                                                               `json:"date"`
	DateAcknowledged         *time.Time                                                                                               `json:"dateAcknowledged"`
	FeeAmount                *int64                                                                                                   `json:"feeAmount"`
	FxTradeDetails           *GetTransactionsByID200ApplicationJSONFxTradeDetailsFxTrade                                              `json:"fxTradeDetails"`
	Ican                     *int64                                                                                                   `json:"ican"`
	MyRef                    *string                                                                                                  `json:"myRef"`
	PaymentRequestPublicCode *string                                                                                                  `json:"paymentRequestPublicCode"`
	RefID                    *int64                                                                                                   `json:"refId"`
	RelatedParty             *interface{}                                                                                             `json:"relatedParty"`
	TaxAmount                *int64                                                                                                   `json:"taxAmount"`
	TxnID                    *int64                                                                                                   `json:"txnId"`
	Type                     *string                                                                                                  `json:"type"`
}

type GetTransactionsByIDResponse struct {
	ContentType string
	StatusCode  int64
	Transaction *GetTransactionsByID200ApplicationJSONTransaction
}
