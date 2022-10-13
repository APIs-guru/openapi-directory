package shared

import (
	"time"
)

type CommandInvocation struct {
	CloudWatchOutputConfig *CloudWatchOutputConfig      `json:"CloudWatchOutputConfig"`
	CommandID              *string                      `json:"CommandId"`
	CommandPlugins         []CommandPlugin              `json:"CommandPlugins"`
	Comment                *string                      `json:"Comment"`
	DocumentName           *string                      `json:"DocumentName"`
	DocumentVersion        *string                      `json:"DocumentVersion"`
	InstanceID             *string                      `json:"InstanceId"`
	InstanceName           *string                      `json:"InstanceName"`
	NotificationConfig     *NotificationConfig          `json:"NotificationConfig"`
	RequestedDateTime      *time.Time                   `json:"RequestedDateTime"`
	ServiceRole            *string                      `json:"ServiceRole"`
	StandardErrorURL       *string                      `json:"StandardErrorUrl"`
	StandardOutputURL      *string                      `json:"StandardOutputUrl"`
	Status                 *CommandInvocationStatusEnum `json:"Status"`
	StatusDetails          *string                      `json:"StatusDetails"`
	TraceOutput            *string                      `json:"TraceOutput"`
}
