package shared

type DebugHookConfig struct {
	CollectionConfigurations []CollectionConfiguration `json:"CollectionConfigurations,omitempty"`
	HookParameters           map[string]string         `json:"HookParameters,omitempty"`
	LocalPath                *string                   `json:"LocalPath,omitempty"`
	S3OutputPath             string                    `json:"S3OutputPath"`
}
