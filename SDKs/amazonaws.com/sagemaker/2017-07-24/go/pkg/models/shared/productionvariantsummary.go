package shared



type ProductionVariantSummary struct {
    CurrentInstanceCount *int64 `json:"CurrentInstanceCount,omitempty"`
    CurrentWeight *float32 `json:"CurrentWeight,omitempty"`
    DeployedImages []DeployedImage `json:"DeployedImages,omitempty"`
    DesiredInstanceCount *int64 `json:"DesiredInstanceCount,omitempty"`
    DesiredWeight *float32 `json:"DesiredWeight,omitempty"`
    VariantName string `json:"VariantName"`
    
}

