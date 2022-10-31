package shared




type TrafficSplitShardByEnum string

const (
    TrafficSplitShardByEnumUnspecified TrafficSplitShardByEnum = "UNSPECIFIED"
TrafficSplitShardByEnumCookie TrafficSplitShardByEnum = "COOKIE"
TrafficSplitShardByEnumIP TrafficSplitShardByEnum = "IP"
TrafficSplitShardByEnumRandom TrafficSplitShardByEnum = "RANDOM"
)


type TrafficSplit struct {
    Allocations map[string]float64 `json:"allocations,omitempty"`
    ShardBy *TrafficSplitShardByEnum `json:"shardBy,omitempty"`
    
}

