package shared

// GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud
// Remediation instructions to resolve violation via gcloud cli
type GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud struct {
	AdditionalLinks []string `json:"additionalLinks,omitempty"`
	GcloudCommands  []string `json:"gcloudCommands,omitempty"`
	Steps           []string `json:"steps,omitempty"`
}
