package shared

type ListShardsOutput struct {
	NextToken *string `json:"NextToken"`
	Shards    []Shard `json:"Shards"`
}
