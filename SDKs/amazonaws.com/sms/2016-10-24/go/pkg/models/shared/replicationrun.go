package shared

import (
	"time"
)

type ReplicationRun struct {
	AmiID              *string                     `json:"amiId,omitempty"`
	CompletedTime      *time.Time                  `json:"completedTime,omitempty"`
	Description        *string                     `json:"description,omitempty"`
	Encrypted          *bool                       `json:"encrypted,omitempty"`
	KmsKeyID           *string                     `json:"kmsKeyId,omitempty"`
	ReplicationRunID   *string                     `json:"replicationRunId,omitempty"`
	ScheduledStartTime *time.Time                  `json:"scheduledStartTime,omitempty"`
	StageDetails       *ReplicationRunStageDetails `json:"stageDetails,omitempty"`
	State              *ReplicationRunStateEnum    `json:"state,omitempty"`
	StatusMessage      *string                     `json:"statusMessage,omitempty"`
	Type               *ReplicationRunTypeEnum     `json:"type,omitempty"`
}
