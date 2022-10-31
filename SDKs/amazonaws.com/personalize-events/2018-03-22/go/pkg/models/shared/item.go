package shared

type Item struct {
	ItemID     string       `json:"itemId"`
	Properties *interface{} `json:"properties,omitempty"`
}
