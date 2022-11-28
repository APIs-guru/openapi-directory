package shared

// SubscribedNodeList
// List of subscribed nodes
type SubscribedNodeList struct {
	Items []SubscribedNode `json:"items"`
	Range Range            `json:"range"`
}
