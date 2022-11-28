package shared

type TrafficSplitShardByEnum string

const (
	TrafficSplitShardByEnumUnspecified TrafficSplitShardByEnum = "UNSPECIFIED"
	TrafficSplitShardByEnumCookie      TrafficSplitShardByEnum = "COOKIE"
	TrafficSplitShardByEnumIP          TrafficSplitShardByEnum = "IP"
	TrafficSplitShardByEnumRandom      TrafficSplitShardByEnum = "RANDOM"
)

// TrafficSplit
// Traffic routing configuration for versions within a single service. Traffic splits define how traffic directed to the service is assigned to versions.
type TrafficSplit struct {
	Allocations map[string]float64       `json:"allocations,omitempty"`
	ShardBy     *TrafficSplitShardByEnum `json:"shardBy,omitempty"`
}
