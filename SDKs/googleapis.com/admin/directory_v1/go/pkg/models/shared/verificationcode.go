package shared

type VerificationCode struct {
	Etag             *string `json:"etag"`
	Kind             *string `json:"kind"`
	UserID           *string `json:"userId"`
	VerificationCode *string `json:"verificationCode"`
}
