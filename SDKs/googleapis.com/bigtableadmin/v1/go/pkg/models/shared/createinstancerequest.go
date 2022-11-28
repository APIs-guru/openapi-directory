package shared

// CreateInstanceRequestInput
// Request message for BigtableInstanceAdmin.CreateInstance.
type CreateInstanceRequestInput struct {
	Clusters   map[string]ClusterInput `json:"clusters,omitempty"`
	Instance   *InstanceInput          `json:"instance,omitempty"`
	InstanceID *string                 `json:"instanceId,omitempty"`
	Parent     *string                 `json:"parent,omitempty"`
}
