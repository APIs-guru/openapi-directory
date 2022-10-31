package shared

type DescribeServicesRequest struct {
	Language        *string  `json:"language,omitempty"`
	ServiceCodeList []string `json:"serviceCodeList,omitempty"`
}
