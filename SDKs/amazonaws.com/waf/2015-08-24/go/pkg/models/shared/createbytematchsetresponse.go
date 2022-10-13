package shared

type CreateByteMatchSetResponse struct {
	ByteMatchSet *ByteMatchSet `json:"ByteMatchSet"`
	ChangeToken  *string       `json:"ChangeToken"`
}
