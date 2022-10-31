package shared

type ListResourcesResponse struct {
	NextToken        *string        `json:"NextToken,omitempty"`
	ResourceInfoList []ResourceInfo `json:"ResourceInfoList,omitempty"`
}
