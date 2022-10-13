package shared

type DescribeInstanceInformationRequest struct {
	Filters                       []InstanceInformationStringFilter `json:"Filters"`
	InstanceInformationFilterList []InstanceInformationFilter       `json:"InstanceInformationFilterList"`
	MaxResults                    *int64                            `json:"MaxResults"`
	NextToken                     *string                           `json:"NextToken"`
}
