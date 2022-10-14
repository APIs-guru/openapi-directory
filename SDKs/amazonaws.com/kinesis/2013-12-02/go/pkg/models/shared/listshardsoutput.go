package shared

type ListShardsOutput struct {
	NextToken *string `json:"NextToken,omitempty"`
	Shards    []Shard `json:"Shards,omitempty"`
}
