package shared

type ListAppImageConfigsResponse struct {
	AppImageConfigs []AppImageConfigDetails `json:"AppImageConfigs,omitempty"`
	NextToken       *string                 `json:"NextToken,omitempty"`
}
