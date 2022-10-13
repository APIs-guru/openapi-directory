package shared

type PlanBillingPeriodTypeEnum string

const (
	PlanBillingPeriodTypeEnumDay   PlanBillingPeriodTypeEnum = "day"
	PlanBillingPeriodTypeEnumWeek  PlanBillingPeriodTypeEnum = "week"
	PlanBillingPeriodTypeEnumMonth PlanBillingPeriodTypeEnum = "month"
	PlanBillingPeriodTypeEnumYear  PlanBillingPeriodTypeEnum = "year"
	PlanBillingPeriodTypeEnumNone  PlanBillingPeriodTypeEnum = "none"
)

type PlanRevenueTypeEnum string

const (
	PlanRevenueTypeEnumTvod PlanRevenueTypeEnum = "TVOD"
	PlanRevenueTypeEnumSvod PlanRevenueTypeEnum = "SVOD"
)

type PlanTypeEnum string

const (
	PlanTypeEnumFree         PlanTypeEnum = "Free"
	PlanTypeEnumSubscription PlanTypeEnum = "Subscription"
)

type Plan struct {
	Alias                  string                    `json:"alias"`
	Benefits               []string                  `json:"benefits"`
	BillingPeriodFrequency int32                     `json:"billingPeriodFrequency"`
	BillingPeriodType      PlanBillingPeriodTypeEnum `json:"billingPeriodType"`
	Currency               string                    `json:"currency"`
	CustomFields           map[string]interface{}    `json:"customFields"`
	HasTrialPeriod         bool                      `json:"hasTrialPeriod"`
	ID                     string                    `json:"id"`
	IsActive               bool                      `json:"isActive"`
	IsFeatured             bool                      `json:"isFeatured"`
	IsPrivate              bool                      `json:"isPrivate"`
	Price                  *float32                  `json:"price"`
	RevenueType            PlanRevenueTypeEnum       `json:"revenueType"`
	SubscriptionCode       string                    `json:"subscriptionCode"`
	Tagline                string                    `json:"tagline"`
	TermsAndConditions     string                    `json:"termsAndConditions"`
	Title                  string                    `json:"title"`
	TrialPeriodDays        int32                     `json:"trialPeriodDays"`
	Type                   PlanTypeEnum              `json:"type"`
}
