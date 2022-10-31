package shared

type DescribeInstanceInformationRequest struct {
	Filters                       []InstanceInformationStringFilter `json:"Filters,omitempty"`
	InstanceInformationFilterList []InstanceInformationFilter       `json:"InstanceInformationFilterList,omitempty"`
	MaxResults                    *int64                            `json:"MaxResults,omitempty"`
	NextToken                     *string                           `json:"NextToken,omitempty"`
}
