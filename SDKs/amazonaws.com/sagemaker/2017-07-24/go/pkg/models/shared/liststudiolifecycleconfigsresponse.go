package shared

type ListStudioLifecycleConfigsResponse struct {
	NextToken              *string                        `json:"NextToken,omitempty"`
	StudioLifecycleConfigs []StudioLifecycleConfigDetails `json:"StudioLifecycleConfigs,omitempty"`
}
