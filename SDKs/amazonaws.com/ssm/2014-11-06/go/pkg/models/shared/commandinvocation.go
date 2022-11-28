package shared

import (
	"time"
)

// CommandInvocation
// An invocation is copy of a command sent to a specific instance. A command can apply to one or more instances. A command invocation applies to one instance. For example, if a user runs SendCommand against three instances, then a command invocation is created for each requested instance ID. A command invocation returns status and detail information about a command you ran.
type CommandInvocation struct {
	CloudWatchOutputConfig *CloudWatchOutputConfig      `json:"CloudWatchOutputConfig,omitempty"`
	CommandID              *string                      `json:"CommandId,omitempty"`
	CommandPlugins         []CommandPlugin              `json:"CommandPlugins,omitempty"`
	Comment                *string                      `json:"Comment,omitempty"`
	DocumentName           *string                      `json:"DocumentName,omitempty"`
	DocumentVersion        *string                      `json:"DocumentVersion,omitempty"`
	InstanceID             *string                      `json:"InstanceId,omitempty"`
	InstanceName           *string                      `json:"InstanceName,omitempty"`
	NotificationConfig     *NotificationConfig          `json:"NotificationConfig,omitempty"`
	RequestedDateTime      *time.Time                   `json:"RequestedDateTime,omitempty"`
	ServiceRole            *string                      `json:"ServiceRole,omitempty"`
	StandardErrorURL       *string                      `json:"StandardErrorUrl,omitempty"`
	StandardOutputURL      *string                      `json:"StandardOutputUrl,omitempty"`
	Status                 *CommandInvocationStatusEnum `json:"Status,omitempty"`
	StatusDetails          *string                      `json:"StatusDetails,omitempty"`
	TraceOutput            *string                      `json:"TraceOutput,omitempty"`
}
