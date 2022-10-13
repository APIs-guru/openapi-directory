package shared

type CreateApplicationRequest struct {
	ApplicationCode          *string                   `json:"ApplicationCode"`
	ApplicationDescription   *string                   `json:"ApplicationDescription"`
	ApplicationName          string                    `json:"ApplicationName"`
	CloudWatchLoggingOptions []CloudWatchLoggingOption `json:"CloudWatchLoggingOptions"`
	Inputs                   []Input                   `json:"Inputs"`
	Outputs                  []Output                  `json:"Outputs"`
	Tags                     []Tag                     `json:"Tags"`
}
