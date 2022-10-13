package shared

type DebugHookConfig struct {
	CollectionConfigurations []CollectionConfiguration `json:"CollectionConfigurations"`
	HookParameters           map[string]string         `json:"HookParameters"`
	LocalPath                *string                   `json:"LocalPath"`
	S3OutputPath             string                    `json:"S3OutputPath"`
}
