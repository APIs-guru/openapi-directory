package shared

type LifeCycle struct {
	AddedToServiceDateTime     *string               `json:"addedToServiceDateTime"`
	ElapsedReplicationDuration *string               `json:"elapsedReplicationDuration"`
	FirstByteDateTime          *string               `json:"firstByteDateTime"`
	LastCutover                *LifeCycleLastCutover `json:"lastCutover"`
	LastSeenByServiceDateTime  *string               `json:"lastSeenByServiceDateTime"`
	LastTest                   *LifeCycleLastTest    `json:"lastTest"`
	State                      *LifeCycleStateEnum   `json:"state"`
}
