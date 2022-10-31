package shared

type RokuPlans struct {
	Plans              []RokuPlanListItem `json:"plans"`
	TermsAndConditions string             `json:"termsAndConditions"`
}
