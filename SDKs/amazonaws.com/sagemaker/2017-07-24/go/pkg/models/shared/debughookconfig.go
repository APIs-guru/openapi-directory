package shared

// DebugHookConfig
// Configuration information for the Debugger hook parameters, metric and tensor collections, and storage paths. To learn more about how to configure the <code>DebugHookConfig</code> parameter, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.
type DebugHookConfig struct {
	CollectionConfigurations []CollectionConfiguration `json:"CollectionConfigurations,omitempty"`
	HookParameters           map[string]string         `json:"HookParameters,omitempty"`
	LocalPath                *string                   `json:"LocalPath,omitempty"`
	S3OutputPath             string                    `json:"S3OutputPath"`
}
