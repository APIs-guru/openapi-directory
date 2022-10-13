package shared

type Tool struct {
	Command                  string            `json:"command"`
	ExitBehavior             *ExitBehaviorEnum `json:"exitBehavior"`
	Name                     string            `json:"name"`
	StreamOutputToCloudWatch *bool             `json:"streamOutputToCloudWatch"`
	StreamUI                 *bool             `json:"streamUI"`
}
