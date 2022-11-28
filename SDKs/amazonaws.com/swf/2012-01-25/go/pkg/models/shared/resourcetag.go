package shared

// ResourceTag
// <p>Tags are key-value pairs that can be associated with Amazon SWF state machines and activities.</p> <p>Tags may only contain unicode letters, digits, whitespace, or these symbols: <code>_ . : / = + - @</code>.</p>
type ResourceTag struct {
	Key   string  `json:"key"`
	Value *string `json:"value,omitempty"`
}
