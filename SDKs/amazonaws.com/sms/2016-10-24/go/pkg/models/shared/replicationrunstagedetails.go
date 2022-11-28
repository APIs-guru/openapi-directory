package shared

// ReplicationRunStageDetails
// Details of the current stage of a replication run.
type ReplicationRunStageDetails struct {
	Stage         *string `json:"stage,omitempty"`
	StageProgress *string `json:"stageProgress,omitempty"`
}
