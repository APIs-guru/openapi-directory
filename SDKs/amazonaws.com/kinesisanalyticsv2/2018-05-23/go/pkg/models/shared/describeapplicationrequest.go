package shared

type DescribeApplicationRequest struct {
	ApplicationName          string `json:"ApplicationName"`
	IncludeAdditionalDetails *bool  `json:"IncludeAdditionalDetails"`
}
