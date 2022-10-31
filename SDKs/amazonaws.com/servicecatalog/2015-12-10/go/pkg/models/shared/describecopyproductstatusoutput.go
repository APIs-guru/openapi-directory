package shared



type DescribeCopyProductStatusOutput struct {
    CopyProductStatus *CopyProductStatusEnum `json:"CopyProductStatus,omitempty"`
    StatusDetail *string `json:"StatusDetail,omitempty"`
    TargetProductID *string `json:"TargetProductId,omitempty"`
    
}

