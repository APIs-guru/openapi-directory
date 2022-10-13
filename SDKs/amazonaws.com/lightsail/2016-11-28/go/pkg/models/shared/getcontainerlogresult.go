package shared

type GetContainerLogResult struct {
	LogEvents     []ContainerServiceLogEvent `json:"logEvents"`
	NextPageToken *string                    `json:"nextPageToken"`
}
