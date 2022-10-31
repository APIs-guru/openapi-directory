package shared

type UntagResourcesOutput struct {
	FailedResourcesMap map[string]FailureInfo `json:"FailedResourcesMap,omitempty"`
}
