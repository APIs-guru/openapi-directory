package shared

type CreateByteMatchSetResponse struct {
	ByteMatchSet *ByteMatchSet `json:"ByteMatchSet,omitempty"`
	ChangeToken  *string       `json:"ChangeToken,omitempty"`
}
