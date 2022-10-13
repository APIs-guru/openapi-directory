package shared

import (
	"time"
)

type Command struct {
	CloudWatchOutputConfig *CloudWatchOutputConfig `json:"CloudWatchOutputConfig"`
	CommandID              *string                 `json:"CommandId"`
	Comment                *string                 `json:"Comment"`
	CompletedCount         *int64                  `json:"CompletedCount"`
	DeliveryTimedOutCount  *int64                  `json:"DeliveryTimedOutCount"`
	DocumentName           *string                 `json:"DocumentName"`
	DocumentVersion        *string                 `json:"DocumentVersion"`
	ErrorCount             *int64                  `json:"ErrorCount"`
	ExpiresAfter           *time.Time              `json:"ExpiresAfter"`
	InstanceIds            []string                `json:"InstanceIds"`
	MaxConcurrency         *string                 `json:"MaxConcurrency"`
	MaxErrors              *string                 `json:"MaxErrors"`
	NotificationConfig     *NotificationConfig     `json:"NotificationConfig"`
	OutputS3BucketName     *string                 `json:"OutputS3BucketName"`
	OutputS3KeyPrefix      *string                 `json:"OutputS3KeyPrefix"`
	OutputS3Region         *string                 `json:"OutputS3Region"`
	Parameters             map[string][]string     `json:"Parameters"`
	RequestedDateTime      *time.Time              `json:"RequestedDateTime"`
	ServiceRole            *string                 `json:"ServiceRole"`
	Status                 *CommandStatusEnum      `json:"Status"`
	StatusDetails          *string                 `json:"StatusDetails"`
	TargetCount            *int64                  `json:"TargetCount"`
	Targets                []Target                `json:"Targets"`
	TimeoutSeconds         *int64                  `json:"TimeoutSeconds"`
}
