package shared




type PaymentCardCardBrandEnum string

const (
    PaymentCardCardBrandEnumVisa PaymentCardCardBrandEnum = "visa"
PaymentCardCardBrandEnumMastercard PaymentCardCardBrandEnum = "mastercard"
PaymentCardCardBrandEnumAmex PaymentCardCardBrandEnum = "amex"
PaymentCardCardBrandEnumDiscover PaymentCardCardBrandEnum = "discover"
PaymentCardCardBrandEnumDiscoverDiners PaymentCardCardBrandEnum = "discover-diners"
PaymentCardCardBrandEnumJcb PaymentCardCardBrandEnum = "jcb"
PaymentCardCardBrandEnumChinaUnionpay PaymentCardCardBrandEnum = "china-unionpay"
PaymentCardCardBrandEnumSquareGiftCard PaymentCardCardBrandEnum = "square-gift-card"
PaymentCardCardBrandEnumSquareCapitalCard PaymentCardCardBrandEnum = "square-capital-card"
PaymentCardCardBrandEnumInterac PaymentCardCardBrandEnum = "interac"
PaymentCardCardBrandEnumEftpos PaymentCardCardBrandEnum = "eftpos"
PaymentCardCardBrandEnumFelica PaymentCardCardBrandEnum = "felica"
PaymentCardCardBrandEnumEbt PaymentCardCardBrandEnum = "ebt"
PaymentCardCardBrandEnumOther PaymentCardCardBrandEnum = "other"
)



type PaymentCardCardTypeEnum string

const (
    PaymentCardCardTypeEnumCredit PaymentCardCardTypeEnum = "credit"
PaymentCardCardTypeEnumDebit PaymentCardCardTypeEnum = "debit"
PaymentCardCardTypeEnumPrepaid PaymentCardCardTypeEnum = "prepaid"
PaymentCardCardTypeEnumOther PaymentCardCardTypeEnum = "other"
)



type PaymentCardPrepaidTypeEnum string

const (
    PaymentCardPrepaidTypeEnumNonPrepaid PaymentCardPrepaidTypeEnum = "non-prepaid"
PaymentCardPrepaidTypeEnumPrepaid PaymentCardPrepaidTypeEnum = "prepaid"
PaymentCardPrepaidTypeEnumUnknown PaymentCardPrepaidTypeEnum = "unknown"
)


type PaymentCard struct {
    BillingAddress *Address `json:"billing_address,omitempty"`
    Bin *string `json:"bin,omitempty"`
    CardBrand *PaymentCardCardBrandEnum `json:"card_brand,omitempty"`
    CardType *PaymentCardCardTypeEnum `json:"card_type,omitempty"`
    CardholderName *string `json:"cardholder_name,omitempty"`
    CustomerID *string `json:"customer_id,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    ExpMonth *int64 `json:"exp_month,omitempty"`
    ExpYear *int64 `json:"exp_year,omitempty"`
    Fingerprint *string `json:"fingerprint,omitempty"`
    ID *string `json:"id,omitempty"`
    Last4 *string `json:"last_4,omitempty"`
    MerchantID *string `json:"merchant_id,omitempty"`
    PrepaidType *PaymentCardPrepaidTypeEnum `json:"prepaid_type,omitempty"`
    ReferenceID *string `json:"reference_id,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

