package shared

type EntitySummary struct {
	EntityArn        *string `json:"EntityArn"`
	EntityID         *string `json:"EntityId"`
	EntityType       *string `json:"EntityType"`
	LastModifiedDate *string `json:"LastModifiedDate"`
	Name             *string `json:"Name"`
	Visibility       *string `json:"Visibility"`
}
