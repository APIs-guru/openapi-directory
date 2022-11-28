package shared

// Tag
// One tag that you want to add to the specified resource. A tag consists of a <code>Key</code> (a name for the tag) and a <code>Value</code>.
type Tag struct {
	Key   string `json:"Key"`
	Value string `json:"Value"`
}
