package shared

type StopApplicationRequest struct {
	ApplicationName string `json:"ApplicationName"`
	Force           *bool  `json:"Force"`
}
