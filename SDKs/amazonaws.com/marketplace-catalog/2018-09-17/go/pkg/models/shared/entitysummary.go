package shared

type EntitySummary struct {
	EntityArn        *string `json:"EntityArn,omitempty"`
	EntityID         *string `json:"EntityId,omitempty"`
	EntityType       *string `json:"EntityType,omitempty"`
	LastModifiedDate *string `json:"LastModifiedDate,omitempty"`
	Name             *string `json:"Name,omitempty"`
	Visibility       *string `json:"Visibility,omitempty"`
}
