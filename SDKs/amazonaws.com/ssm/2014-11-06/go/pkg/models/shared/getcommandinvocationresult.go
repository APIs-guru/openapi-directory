package shared



type GetCommandInvocationResult struct {
    CloudWatchOutputConfig *CloudWatchOutputConfig `json:"CloudWatchOutputConfig,omitempty"`
    CommandID *string `json:"CommandId,omitempty"`
    Comment *string `json:"Comment,omitempty"`
    DocumentName *string `json:"DocumentName,omitempty"`
    DocumentVersion *string `json:"DocumentVersion,omitempty"`
    ExecutionElapsedTime *string `json:"ExecutionElapsedTime,omitempty"`
    ExecutionEndDateTime *string `json:"ExecutionEndDateTime,omitempty"`
    ExecutionStartDateTime *string `json:"ExecutionStartDateTime,omitempty"`
    InstanceID *string `json:"InstanceId,omitempty"`
    PluginName *string `json:"PluginName,omitempty"`
    ResponseCode *int64 `json:"ResponseCode,omitempty"`
    StandardErrorContent *string `json:"StandardErrorContent,omitempty"`
    StandardErrorURL *string `json:"StandardErrorUrl,omitempty"`
    StandardOutputContent *string `json:"StandardOutputContent,omitempty"`
    StandardOutputURL *string `json:"StandardOutputUrl,omitempty"`
    Status *CommandInvocationStatusEnum `json:"Status,omitempty"`
    StatusDetails *string `json:"StatusDetails,omitempty"`
    
}

