package shared

// SchemaRestrictionResponse
// The schema restrictions actively enforced in creating this report. To learn more, see [Access and data-restriction management](https://support.google.com/analytics/answer/10851388).
type SchemaRestrictionResponse struct {
	ActiveMetricRestrictions []ActiveMetricRestriction `json:"activeMetricRestrictions,omitempty"`
}
