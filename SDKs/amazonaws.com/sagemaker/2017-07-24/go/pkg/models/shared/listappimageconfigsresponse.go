package shared

type ListAppImageConfigsResponse struct {
	AppImageConfigs []AppImageConfigDetails `json:"AppImageConfigs"`
	NextToken       *string                 `json:"NextToken"`
}
