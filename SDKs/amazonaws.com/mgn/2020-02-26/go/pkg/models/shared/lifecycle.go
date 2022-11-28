package shared

// LifeCycle
// Lifecycle.
type LifeCycle struct {
	AddedToServiceDateTime     *string               `json:"addedToServiceDateTime,omitempty"`
	ElapsedReplicationDuration *string               `json:"elapsedReplicationDuration,omitempty"`
	FirstByteDateTime          *string               `json:"firstByteDateTime,omitempty"`
	LastCutover                *LifeCycleLastCutover `json:"lastCutover,omitempty"`
	LastSeenByServiceDateTime  *string               `json:"lastSeenByServiceDateTime,omitempty"`
	LastTest                   *LifeCycleLastTest    `json:"lastTest,omitempty"`
	State                      *LifeCycleStateEnum   `json:"state,omitempty"`
}
