package shared

type BtPlanListItemIntervalEnum string

const (
	BtPlanListItemIntervalEnumDay   BtPlanListItemIntervalEnum = "day"
	BtPlanListItemIntervalEnumWeek  BtPlanListItemIntervalEnum = "week"
	BtPlanListItemIntervalEnumMonth BtPlanListItemIntervalEnum = "month"
	BtPlanListItemIntervalEnumYear  BtPlanListItemIntervalEnum = "year"
	BtPlanListItemIntervalEnumNone  BtPlanListItemIntervalEnum = "none"
)

type BtPlanListItem struct {
	Amount                   *float32                    `json:"amount"`
	CtaText                  string                      `json:"ctaText"`
	Currency                 string                      `json:"currency"`
	Description              string                      `json:"description"`
	Ees07PlanDescription     *string                     `json:"ees07PlanDescription"`
	Ees07PlanTitle           *string                     `json:"ees07PlanTitle"`
	Ees07Title               *string                     `json:"ees07Title"`
	HeaderText               string                      `json:"headerText"`
	HeroText                 string                      `json:"heroText"`
	ID                       string                      `json:"id"`
	Interval                 *BtPlanListItemIntervalEnum `json:"interval"`
	IntervalCount            *int32                      `json:"intervalCount"`
	LongText                 string                      `json:"longText"`
	Nickname                 string                      `json:"nickname"`
	NoThanksText             *string                     `json:"noThanksText"`
	Product                  string                      `json:"product"`
	SwitchingText            *string                     `json:"switchingText"`
	TermsAndConditionsItunes *string                     `json:"termsAndConditionsItunes"`
	TermsAndConditionsStripe *string                     `json:"termsAndConditionsStripe"`
	TrialPeriodDays          int32                       `json:"trialPeriodDays"`
}
