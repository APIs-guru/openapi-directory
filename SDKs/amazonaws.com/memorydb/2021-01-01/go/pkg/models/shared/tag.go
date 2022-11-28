package shared

// Tag
// A tag that can be added to an MemoryDB resource. Tags are composed of a Key/Value pair. You can use tags to categorize and track all your MemoryDB resources. When you add or remove tags on clusters, those actions will be replicated to all nodes in the cluster. A tag with a null Value is permitted. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/tagging-resources.html">Tagging your MemoryDB resources</a>
type Tag struct {
	Key   *string `json:"Key,omitempty"`
	Value *string `json:"Value,omitempty"`
}
