package shared

type VerificationCodes struct {
	Etag  *string            `json:"etag"`
	Items []VerificationCode `json:"items"`
	Kind  *string            `json:"kind"`
}
