package shared

type CustomChannel struct {
	Active               *bool   `json:"active"`
	DisplayName          *string `json:"displayName"`
	Name                 *string `json:"name"`
	ReportingDimensionID *string `json:"reportingDimensionId"`
}
