package shared

// ApplicationSummary
// Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.
type ApplicationSummary struct {
	ApplicationArn       string                 `json:"ApplicationARN"`
	ApplicationMode      *ApplicationModeEnum   `json:"ApplicationMode,omitempty"`
	ApplicationName      string                 `json:"ApplicationName"`
	ApplicationStatus    ApplicationStatusEnum  `json:"ApplicationStatus"`
	ApplicationVersionID int64                  `json:"ApplicationVersionId"`
	RuntimeEnvironment   RuntimeEnvironmentEnum `json:"RuntimeEnvironment"`
}
