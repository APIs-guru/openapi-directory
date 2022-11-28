package shared

// ActiveContext
// A context is a variable that contains information about the current state of the conversation between a user and Amazon Lex. Context can be set automatically by Amazon Lex when an intent is fulfilled, or it can be set at runtime using the <code>PutContent</code>, <code>PutText</code>, or <code>PutSession</code> operation.
type ActiveContext struct {
	Name       string                  `json:"name"`
	Parameters map[string]string       `json:"parameters"`
	TimeToLive ActiveContextTimeToLive `json:"timeToLive"`
}
