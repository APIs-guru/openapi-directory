package shared

type TrustedAdvisorCheckSummary struct {
	CategorySpecificSummary TrustedAdvisorCategorySpecificSummary `json:"categorySpecificSummary"`
	CheckID                 string                                `json:"checkId"`
	HasFlaggedResources     *bool                                 `json:"hasFlaggedResources,omitempty"`
	ResourcesSummary        TrustedAdvisorResourcesSummary        `json:"resourcesSummary"`
	Status                  string                                `json:"status"`
	Timestamp               string                                `json:"timestamp"`
}
