package shared

// HashKeyRange
// The range of possible hash key values for the shard, which is a set of ordered contiguous positive integers.
type HashKeyRange struct {
	EndingHashKey   string `json:"EndingHashKey"`
	StartingHashKey string `json:"StartingHashKey"`
}
