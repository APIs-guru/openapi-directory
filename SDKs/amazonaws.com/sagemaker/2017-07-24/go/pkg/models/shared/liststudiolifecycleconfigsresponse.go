package shared

type ListStudioLifecycleConfigsResponse struct {
	NextToken              *string                        `json:"NextToken"`
	StudioLifecycleConfigs []StudioLifecycleConfigDetails `json:"StudioLifecycleConfigs"`
}
