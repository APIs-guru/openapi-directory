package shared

// Item
// Represents item metadata added to an Items dataset using the <code>PutItems</code> API. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing Items Incrementally</a>.
type Item struct {
	ItemID     string       `json:"itemId"`
	Properties *interface{} `json:"properties,omitempty"`
}
