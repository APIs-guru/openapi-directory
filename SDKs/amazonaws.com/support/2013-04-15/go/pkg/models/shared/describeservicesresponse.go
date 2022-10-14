package shared

type DescribeServicesResponse struct {
	Services []Service `json:"services,omitempty"`
}
