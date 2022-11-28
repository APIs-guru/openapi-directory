package shared

type TrafficRuleDescriptor struct {
	Action        ActionEnum
	DstInterface  []InterfaceDescriptor
	FilterType    FilterTypeEnum
	Priority      int64
	TrafficFilter []TrafficFilter
	TrafficRuleID string
}
