package shared

type TrafficRoutingConfigTypeEnum string

const (
	TrafficRoutingConfigTypeEnumAllAtOnce TrafficRoutingConfigTypeEnum = "ALL_AT_ONCE"
	TrafficRoutingConfigTypeEnumCanary    TrafficRoutingConfigTypeEnum = "CANARY"
)
