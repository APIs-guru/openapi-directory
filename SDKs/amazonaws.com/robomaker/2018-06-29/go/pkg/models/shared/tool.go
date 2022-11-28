package shared

// Tool
// Information about a tool. Tools are used in a simulation job.
type Tool struct {
	Command                  string            `json:"command"`
	ExitBehavior             *ExitBehaviorEnum `json:"exitBehavior,omitempty"`
	Name                     string            `json:"name"`
	StreamOutputToCloudWatch *bool             `json:"streamOutputToCloudWatch,omitempty"`
	StreamUI                 *bool             `json:"streamUI,omitempty"`
}
