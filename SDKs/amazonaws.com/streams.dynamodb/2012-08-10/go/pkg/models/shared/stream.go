package shared

// Stream
// Represents all of the data describing a particular stream.
type Stream struct {
	StreamArn   *string `json:"StreamArn,omitempty"`
	StreamLabel *string `json:"StreamLabel,omitempty"`
	TableName   *string `json:"TableName,omitempty"`
}
