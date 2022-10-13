package shared

type ApproveDecision struct {
	ApproveTime    *string        `json:"approveTime"`
	AutoApproved   *bool          `json:"autoApproved"`
	ExpireTime     *string        `json:"expireTime"`
	InvalidateTime *string        `json:"invalidateTime"`
	SignatureInfo  *SignatureInfo `json:"signatureInfo"`
}
