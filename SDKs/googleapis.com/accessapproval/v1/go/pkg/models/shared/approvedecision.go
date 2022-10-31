package shared



type ApproveDecision struct {
    ApproveTime *string `json:"approveTime,omitempty"`
    AutoApproved *bool `json:"autoApproved,omitempty"`
    ExpireTime *string `json:"expireTime,omitempty"`
    InvalidateTime *string `json:"invalidateTime,omitempty"`
    SignatureInfo *SignatureInfo `json:"signatureInfo,omitempty"`
    
}

