package shared

import (
	"time"
)

type ReplicationRun struct {
	AmiID              *string                     `json:"amiId"`
	CompletedTime      *time.Time                  `json:"completedTime"`
	Description        *string                     `json:"description"`
	Encrypted          *bool                       `json:"encrypted"`
	KmsKeyID           *string                     `json:"kmsKeyId"`
	ReplicationRunID   *string                     `json:"replicationRunId"`
	ScheduledStartTime *time.Time                  `json:"scheduledStartTime"`
	StageDetails       *ReplicationRunStageDetails `json:"stageDetails"`
	State              *ReplicationRunStateEnum    `json:"state"`
	StatusMessage      *string                     `json:"statusMessage"`
	Type               *ReplicationRunTypeEnum     `json:"type"`
}
