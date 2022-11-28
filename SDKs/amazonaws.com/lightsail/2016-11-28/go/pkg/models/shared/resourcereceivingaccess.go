package shared

// ResourceReceivingAccess
// Describes an Amazon Lightsail instance that has access to a Lightsail bucket.
type ResourceReceivingAccess struct {
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resourceType,omitempty"`
}
