package shared

import (
	"time"
)

// Command
// Describes a command request.
type Command struct {
	CloudWatchOutputConfig *CloudWatchOutputConfig `json:"CloudWatchOutputConfig,omitempty"`
	CommandID              *string                 `json:"CommandId,omitempty"`
	Comment                *string                 `json:"Comment,omitempty"`
	CompletedCount         *int64                  `json:"CompletedCount,omitempty"`
	DeliveryTimedOutCount  *int64                  `json:"DeliveryTimedOutCount,omitempty"`
	DocumentName           *string                 `json:"DocumentName,omitempty"`
	DocumentVersion        *string                 `json:"DocumentVersion,omitempty"`
	ErrorCount             *int64                  `json:"ErrorCount,omitempty"`
	ExpiresAfter           *time.Time              `json:"ExpiresAfter,omitempty"`
	InstanceIds            []string                `json:"InstanceIds,omitempty"`
	MaxConcurrency         *string                 `json:"MaxConcurrency,omitempty"`
	MaxErrors              *string                 `json:"MaxErrors,omitempty"`
	NotificationConfig     *NotificationConfig     `json:"NotificationConfig,omitempty"`
	OutputS3BucketName     *string                 `json:"OutputS3BucketName,omitempty"`
	OutputS3KeyPrefix      *string                 `json:"OutputS3KeyPrefix,omitempty"`
	OutputS3Region         *string                 `json:"OutputS3Region,omitempty"`
	Parameters             map[string][]string     `json:"Parameters,omitempty"`
	RequestedDateTime      *time.Time              `json:"RequestedDateTime,omitempty"`
	ServiceRole            *string                 `json:"ServiceRole,omitempty"`
	Status                 *CommandStatusEnum      `json:"Status,omitempty"`
	StatusDetails          *string                 `json:"StatusDetails,omitempty"`
	TargetCount            *int64                  `json:"TargetCount,omitempty"`
	Targets                []Target                `json:"Targets,omitempty"`
	TimeoutSeconds         *int64                  `json:"TimeoutSeconds,omitempty"`
}
