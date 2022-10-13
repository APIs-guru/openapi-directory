package shared

type ShippingOptionEnum string

const (
	ShippingOptionEnumSecondDay ShippingOptionEnum = "SECOND_DAY"
	ShippingOptionEnumNextDay   ShippingOptionEnum = "NEXT_DAY"
	ShippingOptionEnumExpress   ShippingOptionEnum = "EXPRESS"
	ShippingOptionEnumStandard  ShippingOptionEnum = "STANDARD"
)
