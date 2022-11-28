package shared

type ReservedDbInstancesOffering struct {
	CurrencyCode                  *string
	DbInstanceClass               *string
	Duration                      *int64
	FixedPrice                    *float64
	MultiAz                       *bool
	OfferingType                  *string
	ProductDescription            *string
	RecurringCharges              []RecurringCharge
	ReservedDbInstancesOfferingID *string
	UsagePrice                    *float64
}
