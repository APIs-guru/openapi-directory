package shared

// EntitySummary
// This object is a container for common summary information about the entity. The summary doesn't contain the whole entity structure, but it does contain information common across all entities.
type EntitySummary struct {
	EntityArn        *string `json:"EntityArn,omitempty"`
	EntityID         *string `json:"EntityId,omitempty"`
	EntityType       *string `json:"EntityType,omitempty"`
	LastModifiedDate *string `json:"LastModifiedDate,omitempty"`
	Name             *string `json:"Name,omitempty"`
	Visibility       *string `json:"Visibility,omitempty"`
}
