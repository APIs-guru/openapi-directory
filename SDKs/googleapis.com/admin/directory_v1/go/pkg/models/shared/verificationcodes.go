package shared

type VerificationCodes struct {
	Etag  *string            `json:"etag,omitempty"`
	Items []VerificationCode `json:"items,omitempty"`
	Kind  *string            `json:"kind,omitempty"`
}
