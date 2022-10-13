package shared

type DescribeServicesRequest struct {
	Language        *string  `json:"language"`
	ServiceCodeList []string `json:"serviceCodeList"`
}
