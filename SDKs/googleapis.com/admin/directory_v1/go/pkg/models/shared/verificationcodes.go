package shared

// VerificationCodes
// JSON response template for list verification codes operation in Directory API.
type VerificationCodes struct {
	Etag  *string            `json:"etag,omitempty"`
	Items []VerificationCode `json:"items,omitempty"`
	Kind  *string            `json:"kind,omitempty"`
}
