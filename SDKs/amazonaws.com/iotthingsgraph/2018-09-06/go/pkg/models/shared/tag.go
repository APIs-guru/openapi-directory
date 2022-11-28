package shared

// Tag
// Metadata assigned to an AWS IoT Things Graph resource consisting of a key-value pair.
type Tag struct {
	Key   string `json:"key"`
	Value string `json:"value"`
}
