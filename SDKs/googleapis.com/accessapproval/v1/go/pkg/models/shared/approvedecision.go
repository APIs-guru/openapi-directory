package shared

// ApproveDecision
// A decision that has been made to approve access to a resource.
type ApproveDecision struct {
	ApproveTime    *string        `json:"approveTime,omitempty"`
	AutoApproved   *bool          `json:"autoApproved,omitempty"`
	ExpireTime     *string        `json:"expireTime,omitempty"`
	InvalidateTime *string        `json:"invalidateTime,omitempty"`
	SignatureInfo  *SignatureInfo `json:"signatureInfo,omitempty"`
}
