package shared



type APICoreDtoAccountingPlan struct {
    AllowedPersonalDomains *int32 `json:"allowedPersonalDomains,omitempty"`
    AllowedPersonalUrls *int32 `json:"allowedPersonalUrls,omitempty"`
    BillingPeriodEnd *string `json:"billingPeriodEnd,omitempty"`
    BillingPeriodStart *string `json:"billingPeriodStart,omitempty"`
    BonusMonthlyEvents *int64 `json:"bonusMonthlyEvents,omitempty"`
    MaximumDatapoints *int64 `json:"maximumDatapoints,omitempty"`
    MaximumGuests *int64 `json:"maximumGuests,omitempty"`
    MonthlyEvents *int64 `json:"monthlyEvents,omitempty"`
    Name *string `json:"name,omitempty"`
    Price *float64 `json:"price,omitempty"`
    ProfileID *int64 `json:"profileId,omitempty"`
    Recurring *bool `json:"recurring,omitempty"`
    RecurringPeriod *int32 `json:"recurringPeriod,omitempty"`
    UsedDatapoints *int64 `json:"usedDatapoints,omitempty"`
    UsedMonthlyEvents *int64 `json:"usedMonthlyEvents,omitempty"`
    
}

