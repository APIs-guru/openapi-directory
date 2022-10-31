package shared

import (
"time")

type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard struct {
    Alias *string `json:"alias,omitempty"`
    CardID *float64 `json:"cardId,omitempty"`
    EmbossBusinessName *string `json:"embossBusinessName,omitempty"`
    EmbossCardName *string `json:"embossCardName,omitempty"`
    ExpiryDate *time.Time `json:"expiryDate,omitempty"`
    MaskedPan *string `json:"maskedPan,omitempty"`
    Provider *string `json:"provider,omitempty"`
    
}

type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade struct {
    BuyAmount *int64 `json:"buyAmount,omitempty"`
    BuyCurrency *string `json:"buyCurrency,omitempty"`
    FixedSide *string `json:"fixedSide,omitempty"`
    Rate4d *int64 `json:"rate4d,omitempty"`
    SellAmount *int64 `json:"sellAmount,omitempty"`
    SellCurrency *string `json:"sellCurrency,omitempty"`
    
}

type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountAccount struct {
    AccountNumber *string `json:"accountNumber,omitempty"`
    Alias *string `json:"alias,omitempty"`
    Bic *string `json:"bic,omitempty"`
    Iban *string `json:"iban,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Nsc *string `json:"nsc,omitempty"`
    
}


type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountTypeEnum string

const (
    Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountTypeEnumFireAccount Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountTypeEnum = "FIRE_ACCOUNT"
)


type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccount struct {
    Account *Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountAccount `json:"account,omitempty"`
    Type *Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyFireAccountTypeEnum `json:"type,omitempty"`
    
}

type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountAccount struct {
    AccountNumber *string `json:"accountNumber,omitempty"`
    Alias *string `json:"alias,omitempty"`
    Bic *string `json:"bic,omitempty"`
    Iban *string `json:"iban,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Nsc *string `json:"nsc,omitempty"`
    
}


type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountTypeEnum string

const (
    Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountTypeEnumExternalAccount Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountTypeEnum = "EXTERNAL_ACCOUNT"
)


type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccount struct {
    Account *Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountAccount `json:"account,omitempty"`
    Type *Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyExternalAccountTypeEnum `json:"type,omitempty"`
    
}

type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeAccount struct {
    AccountNumber *string `json:"accountNumber,omitempty"`
    Alias *string `json:"alias,omitempty"`
    Bic *string `json:"bic,omitempty"`
    Iban *string `json:"iban,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Nsc *string `json:"nsc,omitempty"`
    
}


type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeTypeEnum string

const (
    Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeTypeEnumWithdrawalAccount Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeTypeEnum = "WITHDRAWAL_ACCOUNT"
)


type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayee struct {
    Account *Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeAccount `json:"account,omitempty"`
    Type *Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyPayeeTypeEnum `json:"type,omitempty"`
    
}

type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant struct {
    AcquirerIDDe32 *string `json:"acquirerIdDe32,omitempty"`
    AdditionalAmtDe54 *string `json:"additionalAmtDe54,omitempty"`
    AdditionalDataDe124 *string `json:"additionalDataDe124,omitempty"`
    AdditionalDataDe48 *string `json:"additionalDataDe48,omitempty"`
    AuthCodeDe38 *string `json:"authCodeDe38,omitempty"`
    AuthorisedByGps *string `json:"authorisedByGps,omitempty"`
    AvsResult *string `json:"avsResult,omitempty"`
    BillAmt *float64 `json:"billAmt,omitempty"`
    BillCcy *string `json:"billCcy,omitempty"`
    ExpiryDate *string `json:"expiryDate,omitempty"`
    MccCode *string `json:"mccCode,omitempty"`
    MerchIDDe42 *string `json:"merchIdDe42,omitempty"`
    MerchNameDe43 *string `json:"merchNameDe43,omitempty"`
    MtID *string `json:"mtId,omitempty"`
    PosDataDe22 *string `json:"posDataDe22,omitempty"`
    PosDataDe61 *string `json:"posDataDe61,omitempty"`
    PosTermnlDe41 *string `json:"posTermnlDe41,omitempty"`
    ProcCode *string `json:"procCode,omitempty"`
    RecordDataDe120 *string `json:"recordDataDe120,omitempty"`
    RespCodeDe39 *string `json:"respCodeDe39,omitempty"`
    RetRefNoDe37 *string `json:"retRefNoDe37,omitempty"`
    StatusCode *string `json:"statusCode,omitempty"`
    Token *string `json:"token,omitempty"`
    TxnAmt4d *float64 `json:"txnAmt4d,omitempty"`
    TxnCcy *string `json:"txnCcy,omitempty"`
    TxnCtry *string `json:"txnCtry,omitempty"`
    TxnDesc *string `json:"txnDesc,omitempty"`
    TxnStatCode *string `json:"txnStatCode,omitempty"`
    TxnType *string `json:"txnType,omitempty"`
    
}


type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentTypeEnum string

const (
    Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentTypeEnumCardMerchant Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentTypeEnum = "CARD_MERCHANT"
Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentTypeEnumCardAtm Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentTypeEnum = "CARD_ATM"
)


type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPayment struct {
    CardMerchant *Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentCardMerchant `json:"cardMerchant,omitempty"`
    Type *Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedPartyRelatedPartyCardPaymentTypeEnum `json:"type,omitempty"`
    
}

type Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema struct {
    AmountAfterCharges *int64 `json:"amountAfterCharges,omitempty"`
    AmountBeforeCharges *int64 `json:"amountBeforeCharges,omitempty"`
    Balance *int64 `json:"balance,omitempty"`
    Card *Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard `json:"card,omitempty"`
    Currency *OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency `json:"currency,omitempty"`
    Date *time.Time `json:"date,omitempty"`
    DateAcknowledged *time.Time `json:"dateAcknowledged,omitempty"`
    FeeAmount *int64 `json:"feeAmount,omitempty"`
    FxTradeDetails *Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaFxTrade `json:"fxTradeDetails,omitempty"`
    Ican *int64 `json:"ican,omitempty"`
    MyRef *string `json:"myRef,omitempty"`
    PaymentRequestPublicCode *string `json:"paymentRequestPublicCode,omitempty"`
    RefID *int64 `json:"refId,omitempty"`
    RelatedParty *interface{} `json:"relatedParty,omitempty"`
    TaxAmount *int64 `json:"taxAmount,omitempty"`
    TxnID *int64 `json:"txnId,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

