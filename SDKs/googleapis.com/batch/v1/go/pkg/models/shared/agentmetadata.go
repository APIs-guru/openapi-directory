package shared

// AgentMetadata
// AgentMetadata never changes for a single instance of VM agent.
type AgentMetadata struct {
	CreationTime *string           `json:"creationTime,omitempty"`
	Creator      *string           `json:"creator,omitempty"`
	Instance     *string           `json:"instance,omitempty"`
	InstanceID   *string           `json:"instanceId,omitempty"`
	OsRelease    map[string]string `json:"osRelease,omitempty"`
	Version      *string           `json:"version,omitempty"`
	Zone         *string           `json:"zone,omitempty"`
}
