package shared

type DeleteByteMatchSetRequest struct {
	ByteMatchSetID string `json:"ByteMatchSetId"`
	ChangeToken    string `json:"ChangeToken"`
}
