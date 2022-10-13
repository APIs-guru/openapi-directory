package shared

type APICoreDtoAccountingPlan struct {
	AllowedPersonalDomains *int32   `json:"allowedPersonalDomains"`
	AllowedPersonalUrls    *int32   `json:"allowedPersonalUrls"`
	BillingPeriodEnd       *string  `json:"billingPeriodEnd"`
	BillingPeriodStart     *string  `json:"billingPeriodStart"`
	BonusMonthlyEvents     *int64   `json:"bonusMonthlyEvents"`
	MaximumDatapoints      *int64   `json:"maximumDatapoints"`
	MaximumGuests          *int64   `json:"maximumGuests"`
	MonthlyEvents          *int64   `json:"monthlyEvents"`
	Name                   *string  `json:"name"`
	Price                  *float64 `json:"price"`
	ProfileID              *int64   `json:"profileId"`
	Recurring              *bool    `json:"recurring"`
	RecurringPeriod        *int32   `json:"recurringPeriod"`
	UsedDatapoints         *int64   `json:"usedDatapoints"`
	UsedMonthlyEvents      *int64   `json:"usedMonthlyEvents"`
}
