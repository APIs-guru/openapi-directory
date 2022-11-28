package shared

// ReservedNodeOffering
// Describes a reserved node offering.
type ReservedNodeOffering struct {
	CurrencyCode             *string
	Duration                 *int64
	FixedPrice               *float64
	NodeType                 *string
	OfferingType             *string
	RecurringCharges         []RecurringCharge
	ReservedNodeOfferingID   *string
	ReservedNodeOfferingType *ReservedNodeOfferingTypeEnum
	UsagePrice               *float64
}
