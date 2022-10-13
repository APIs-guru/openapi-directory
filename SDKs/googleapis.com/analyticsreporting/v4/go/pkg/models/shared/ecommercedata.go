package shared

type EcommerceDataActionTypeEnum string

const (
	EcommerceDataActionTypeEnumUnknown        EcommerceDataActionTypeEnum = "UNKNOWN"
	EcommerceDataActionTypeEnumClick          EcommerceDataActionTypeEnum = "CLICK"
	EcommerceDataActionTypeEnumDetailsView    EcommerceDataActionTypeEnum = "DETAILS_VIEW"
	EcommerceDataActionTypeEnumAddToCart      EcommerceDataActionTypeEnum = "ADD_TO_CART"
	EcommerceDataActionTypeEnumRemoveFromCart EcommerceDataActionTypeEnum = "REMOVE_FROM_CART"
	EcommerceDataActionTypeEnumCheckout       EcommerceDataActionTypeEnum = "CHECKOUT"
	EcommerceDataActionTypeEnumPayment        EcommerceDataActionTypeEnum = "PAYMENT"
	EcommerceDataActionTypeEnumRefund         EcommerceDataActionTypeEnum = "REFUND"
	EcommerceDataActionTypeEnumCheckoutOption EcommerceDataActionTypeEnum = "CHECKOUT_OPTION"
)

type EcommerceDataEcommerceTypeEnum string

const (
	EcommerceDataEcommerceTypeEnumEcommerceTypeUnspecified EcommerceDataEcommerceTypeEnum = "ECOMMERCE_TYPE_UNSPECIFIED"
	EcommerceDataEcommerceTypeEnumClassic                  EcommerceDataEcommerceTypeEnum = "CLASSIC"
	EcommerceDataEcommerceTypeEnumEnhanced                 EcommerceDataEcommerceTypeEnum = "ENHANCED"
)

type EcommerceData struct {
	ActionType    *EcommerceDataActionTypeEnum    `json:"actionType"`
	EcommerceType *EcommerceDataEcommerceTypeEnum `json:"ecommerceType"`
	Products      []ProductData                   `json:"products"`
	Transaction   *TransactionData                `json:"transaction"`
}
