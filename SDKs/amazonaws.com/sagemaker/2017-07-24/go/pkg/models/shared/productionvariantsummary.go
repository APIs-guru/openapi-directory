package shared

type ProductionVariantSummary struct {
	CurrentInstanceCount *int64          `json:"CurrentInstanceCount"`
	CurrentWeight        *float32        `json:"CurrentWeight"`
	DeployedImages       []DeployedImage `json:"DeployedImages"`
	DesiredInstanceCount *int64          `json:"DesiredInstanceCount"`
	DesiredWeight        *float32        `json:"DesiredWeight"`
	VariantName          string          `json:"VariantName"`
}
