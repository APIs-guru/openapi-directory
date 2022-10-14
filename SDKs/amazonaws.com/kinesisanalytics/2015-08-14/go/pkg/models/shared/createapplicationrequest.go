package shared

type CreateApplicationRequest struct {
	ApplicationCode          *string                   `json:"ApplicationCode,omitempty"`
	ApplicationDescription   *string                   `json:"ApplicationDescription,omitempty"`
	ApplicationName          string                    `json:"ApplicationName"`
	CloudWatchLoggingOptions []CloudWatchLoggingOption `json:"CloudWatchLoggingOptions,omitempty"`
	Inputs                   []Input                   `json:"Inputs,omitempty"`
	Outputs                  []Output                  `json:"Outputs,omitempty"`
	Tags                     []Tag                     `json:"Tags,omitempty"`
}
