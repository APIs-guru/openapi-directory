package shared

import (
	"time"
)

type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaCardRelatedCard struct {
	Alias              *string    `json:"alias"`
	CardID             *float64   `json:"cardId"`
	EmbossBusinessName *string    `json:"embossBusinessName"`
	EmbossCardName     *string    `json:"embossCardName"`
	ExpiryDate         *time.Time `json:"expiryDate"`
	MaskedPan          *string    `json:"maskedPan"`
	Provider           *string    `json:"provider"`
}

type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTradeDetailsFxTrade struct {
	BuyAmount    *int64  `json:"buyAmount"`
	BuyCurrency  *string `json:"buyCurrency"`
	FixedSide    *string `json:"fixedSide"`
	Rate4d       *int64  `json:"rate4d"`
	SellAmount   *int64  `json:"sellAmount"`
	SellCurrency *string `json:"sellCurrency"`
}

type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty1Account struct {
	AccountNumber *string `json:"accountNumber"`
	Alias         *string `json:"alias"`
	Bic           *string `json:"bic"`
	Iban          *string `json:"iban"`
	ID            *int64  `json:"id"`
	Nsc           *string `json:"nsc"`
}

type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty1TypeEnum string

const (
	Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty1TypeEnumFireAccount Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty1TypeEnum = "FIRE_ACCOUNT"
)

type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty1RelatedPartyFireAccount struct {
	Account *Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty1Account  `json:"account"`
	Type    *Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty1TypeEnum `json:"type"`
}

type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty2Account struct {
	AccountNumber *string `json:"accountNumber"`
	Alias         *string `json:"alias"`
	Bic           *string `json:"bic"`
	Iban          *string `json:"iban"`
	ID            *int64  `json:"id"`
	Nsc           *string `json:"nsc"`
}

type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty2TypeEnum string

const (
	Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty2TypeEnumExternalAccount Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty2TypeEnum = "EXTERNAL_ACCOUNT"
)

type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty2RelatedPartyExternalAccount struct {
	Account *Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty2Account  `json:"account"`
	Type    *Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty2TypeEnum `json:"type"`
}

type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty3Account struct {
	AccountNumber *string `json:"accountNumber"`
	Alias         *string `json:"alias"`
	Bic           *string `json:"bic"`
	Iban          *string `json:"iban"`
	ID            *int64  `json:"id"`
	Nsc           *string `json:"nsc"`
}

type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty3TypeEnum string

const (
	Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty3TypeEnumWithdrawalAccount Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty3TypeEnum = "WITHDRAWAL_ACCOUNT"
)

type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty3RelatedPartyPayee struct {
	Account *Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty3Account  `json:"account"`
	Type    *Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty3TypeEnum `json:"type"`
}

type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty4CardMerchant struct {
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

type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty4TypeEnum string

const (
	Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty4TypeEnumCardMerchant Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty4TypeEnum = "CARD_MERCHANT"
	Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty4TypeEnumCardAtm      Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty4TypeEnum = "CARD_ATM"
)

type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty4RelatedPartyCardPayment struct {
	CardMerchant *Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty4CardMerchant `json:"cardMerchant"`
	Type         *Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedParty4TypeEnum     `json:"type"`
}

type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema struct {
	AmountAfterCharges       *int64                                                                                                            `json:"amountAfterCharges"`
	AmountBeforeCharges      *int64                                                                                                            `json:"amountBeforeCharges"`
	Balance                  *int64                                                                                                            `json:"balance"`
	Card                     *Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaCardRelatedCard       `json:"card"`
	Currency                 *OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency                 `json:"currency"`
	Date                     *time.Time                                                                                                        `json:"date"`
	DateAcknowledged         *time.Time                                                                                                        `json:"dateAcknowledged"`
	FeeAmount                *int64                                                                                                            `json:"feeAmount"`
	FxTradeDetails           *Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTradeDetailsFxTrade `json:"fxTradeDetails"`
	Ican                     *int64                                                                                                            `json:"ican"`
	MyRef                    *string                                                                                                           `json:"myRef"`
	PaymentRequestPublicCode *string                                                                                                           `json:"paymentRequestPublicCode"`
	RefID                    *int64                                                                                                            `json:"refId"`
	RelatedParty             *interface{}                                                                                                      `json:"relatedParty"`
	TaxAmount                *int64                                                                                                            `json:"taxAmount"`
	TxnID                    *int64                                                                                                            `json:"txnId"`
	Type                     *string                                                                                                           `json:"type"`
}
