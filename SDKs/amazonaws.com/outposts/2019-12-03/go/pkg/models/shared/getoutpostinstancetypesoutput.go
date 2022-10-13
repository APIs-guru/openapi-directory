package shared

type GetOutpostInstanceTypesOutput struct {
	InstanceTypes []InstanceTypeItem `json:"InstanceTypes"`
	NextToken     *string            `json:"NextToken"`
	OutpostArn    *string            `json:"OutpostArn"`
	OutpostID     *string            `json:"OutpostId"`
}
