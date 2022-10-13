package shared

type ListResourcesResponse struct {
	NextToken        *string        `json:"NextToken"`
	ResourceInfoList []ResourceInfo `json:"ResourceInfoList"`
}
