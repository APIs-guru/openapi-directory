package shared

type DescribeCopyProductStatusOutput struct {
	CopyProductStatus *CopyProductStatusEnum `json:"CopyProductStatus"`
	StatusDetail      *string                `json:"StatusDetail"`
	TargetProductID   *string                `json:"TargetProductId"`
}
