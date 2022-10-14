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
	Amount                   *float32                    `json:"amount,omitempty"`
	CtaText                  string                      `json:"ctaText"`
	Currency                 string                      `json:"currency"`
	Description              string                      `json:"description"`
	Ees07PlanDescription     *string                     `json:"ees07PlanDescription,omitempty"`
	Ees07PlanTitle           *string                     `json:"ees07PlanTitle,omitempty"`
	Ees07Title               *string                     `json:"ees07Title,omitempty"`
	HeaderText               string                      `json:"headerText"`
	HeroText                 string                      `json:"heroText"`
	ID                       string                      `json:"id"`
	Interval                 *BtPlanListItemIntervalEnum `json:"interval,omitempty"`
	IntervalCount            *int32                      `json:"intervalCount,omitempty"`
	LongText                 string                      `json:"longText"`
	Nickname                 string                      `json:"nickname"`
	NoThanksText             *string                     `json:"noThanksText,omitempty"`
	Product                  string                      `json:"product"`
	SwitchingText            *string                     `json:"switchingText,omitempty"`
	TermsAndConditionsItunes *string                     `json:"termsAndConditionsItunes,omitempty"`
	TermsAndConditionsStripe *string                     `json:"termsAndConditionsStripe,omitempty"`
	TrialPeriodDays          int32                       `json:"trialPeriodDays"`
}
