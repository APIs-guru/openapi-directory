package shared

import (
"time")

type CommandInvocation struct {
    CloudWatchOutputConfig *CloudWatchOutputConfig `json:"CloudWatchOutputConfig,omitempty"`
    CommandID *string `json:"CommandId,omitempty"`
    CommandPlugins []CommandPlugin `json:"CommandPlugins,omitempty"`
    Comment *string `json:"Comment,omitempty"`
    DocumentName *string `json:"DocumentName,omitempty"`
    DocumentVersion *string `json:"DocumentVersion,omitempty"`
    InstanceID *string `json:"InstanceId,omitempty"`
    InstanceName *string `json:"InstanceName,omitempty"`
    NotificationConfig *NotificationConfig `json:"NotificationConfig,omitempty"`
    RequestedDateTime *time.Time `json:"RequestedDateTime,omitempty"`
    ServiceRole *string `json:"ServiceRole,omitempty"`
    StandardErrorURL *string `json:"StandardErrorUrl,omitempty"`
    StandardOutputURL *string `json:"StandardOutputUrl,omitempty"`
    Status *CommandInvocationStatusEnum `json:"Status,omitempty"`
    StatusDetails *string `json:"StatusDetails,omitempty"`
    TraceOutput *string `json:"TraceOutput,omitempty"`
    
}

