package shared

// ProductionVariantSummary
// Describes weight and capacities for a production variant associated with an endpoint. If you sent a request to the <code>UpdateEndpointWeightsAndCapacities</code> API and the endpoint status is <code>Updating</code>, you get different desired and current values.
type ProductionVariantSummary struct {
	CurrentInstanceCount *int64          `json:"CurrentInstanceCount,omitempty"`
	CurrentWeight        *float32        `json:"CurrentWeight,omitempty"`
	DeployedImages       []DeployedImage `json:"DeployedImages,omitempty"`
	DesiredInstanceCount *int64          `json:"DesiredInstanceCount,omitempty"`
	DesiredWeight        *float32        `json:"DesiredWeight,omitempty"`
	VariantName          string          `json:"VariantName"`
}
