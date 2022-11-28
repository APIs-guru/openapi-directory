package shared

// InstanceMetadata
// Provides information about the SSO instance.
type InstanceMetadata struct {
	IdentityStoreID *string `json:"IdentityStoreId,omitempty"`
	InstanceArn     *string `json:"InstanceArn,omitempty"`
}
