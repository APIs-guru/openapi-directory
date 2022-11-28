package shared

// GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole
// Remediation instructions to resolve violation via cloud console
type GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole struct {
	AdditionalLinks []string `json:"additionalLinks,omitempty"`
	ConsoleUris     []string `json:"consoleUris,omitempty"`
	Steps           []string `json:"steps,omitempty"`
}
