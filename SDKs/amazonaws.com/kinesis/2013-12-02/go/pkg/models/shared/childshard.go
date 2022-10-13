package shared

type ChildShard struct {
	HashKeyRange HashKeyRange `json:"HashKeyRange"`
	ParentShards []string     `json:"ParentShards"`
	ShardID      string       `json:"ShardId"`
}
