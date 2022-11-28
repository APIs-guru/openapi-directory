package shared

// ApplicationVersionSummary
// The summary of the application version.
type ApplicationVersionSummary struct {
	ApplicationStatus    ApplicationStatusEnum `json:"ApplicationStatus"`
	ApplicationVersionID int64                 `json:"ApplicationVersionId"`
}
