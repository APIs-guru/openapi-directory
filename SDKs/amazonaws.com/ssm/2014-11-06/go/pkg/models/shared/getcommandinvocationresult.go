package shared

type GetCommandInvocationResult struct {
	CloudWatchOutputConfig *CloudWatchOutputConfig      `json:"CloudWatchOutputConfig"`
	CommandID              *string                      `json:"CommandId"`
	Comment                *string                      `json:"Comment"`
	DocumentName           *string                      `json:"DocumentName"`
	DocumentVersion        *string                      `json:"DocumentVersion"`
	ExecutionElapsedTime   *string                      `json:"ExecutionElapsedTime"`
	ExecutionEndDateTime   *string                      `json:"ExecutionEndDateTime"`
	ExecutionStartDateTime *string                      `json:"ExecutionStartDateTime"`
	InstanceID             *string                      `json:"InstanceId"`
	PluginName             *string                      `json:"PluginName"`
	ResponseCode           *int64                       `json:"ResponseCode"`
	StandardErrorContent   *string                      `json:"StandardErrorContent"`
	StandardErrorURL       *string                      `json:"StandardErrorUrl"`
	StandardOutputContent  *string                      `json:"StandardOutputContent"`
	StandardOutputURL      *string                      `json:"StandardOutputUrl"`
	Status                 *CommandInvocationStatusEnum `json:"Status"`
	StatusDetails          *string                      `json:"StatusDetails"`
}
