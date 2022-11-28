package shared

// KycResponse
// This is the base response type of the getKYC method.
type KycResponse struct {
	KycChecks []KycCheck `json:"kycChecks,omitempty"`
}
