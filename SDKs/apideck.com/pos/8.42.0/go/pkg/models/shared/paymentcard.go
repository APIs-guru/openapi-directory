package shared

type PaymentCardCardBrandEnum string

const (
	PaymentCardCardBrandEnumVisa              PaymentCardCardBrandEnum = "visa"
	PaymentCardCardBrandEnumMastercard        PaymentCardCardBrandEnum = "mastercard"
	PaymentCardCardBrandEnumAmex              PaymentCardCardBrandEnum = "amex"
	PaymentCardCardBrandEnumDiscover          PaymentCardCardBrandEnum = "discover"
	PaymentCardCardBrandEnumDiscoverDiners    PaymentCardCardBrandEnum = "discover-diners"
	PaymentCardCardBrandEnumJcb               PaymentCardCardBrandEnum = "jcb"
	PaymentCardCardBrandEnumChinaUnionpay     PaymentCardCardBrandEnum = "china-unionpay"
	PaymentCardCardBrandEnumSquareGiftCard    PaymentCardCardBrandEnum = "square-gift-card"
	PaymentCardCardBrandEnumSquareCapitalCard PaymentCardCardBrandEnum = "square-capital-card"
	PaymentCardCardBrandEnumInterac           PaymentCardCardBrandEnum = "interac"
	PaymentCardCardBrandEnumEftpos            PaymentCardCardBrandEnum = "eftpos"
	PaymentCardCardBrandEnumFelica            PaymentCardCardBrandEnum = "felica"
	PaymentCardCardBrandEnumEbt               PaymentCardCardBrandEnum = "ebt"
	PaymentCardCardBrandEnumOther             PaymentCardCardBrandEnum = "other"
)

type PaymentCardCardTypeEnum string

const (
	PaymentCardCardTypeEnumCredit  PaymentCardCardTypeEnum = "credit"
	PaymentCardCardTypeEnumDebit   PaymentCardCardTypeEnum = "debit"
	PaymentCardCardTypeEnumPrepaid PaymentCardCardTypeEnum = "prepaid"
	PaymentCardCardTypeEnumOther   PaymentCardCardTypeEnum = "other"
)

type PaymentCardPrepaidTypeEnum string

const (
	PaymentCardPrepaidTypeEnumNonPrepaid PaymentCardPrepaidTypeEnum = "non-prepaid"
	PaymentCardPrepaidTypeEnumPrepaid    PaymentCardPrepaidTypeEnum = "prepaid"
	PaymentCardPrepaidTypeEnumUnknown    PaymentCardPrepaidTypeEnum = "unknown"
)

type PaymentCard struct {
	BillingAddress *Address                    `json:"billing_address"`
	Bin            *string                     `json:"bin"`
	CardBrand      *PaymentCardCardBrandEnum   `json:"card_brand"`
	CardType       *PaymentCardCardTypeEnum    `json:"card_type"`
	CardholderName *string                     `json:"cardholder_name"`
	CustomerID     *string                     `json:"customer_id"`
	Enabled        *bool                       `json:"enabled"`
	ExpMonth       *int64                      `json:"exp_month"`
	ExpYear        *int64                      `json:"exp_year"`
	Fingerprint    *string                     `json:"fingerprint"`
	ID             *string                     `json:"id"`
	Last4          *string                     `json:"last_4"`
	MerchantID     *string                     `json:"merchant_id"`
	PrepaidType    *PaymentCardPrepaidTypeEnum `json:"prepaid_type"`
	ReferenceID    *string                     `json:"reference_id"`
	Version        *string                     `json:"version"`
}
