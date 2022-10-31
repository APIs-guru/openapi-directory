package shared



type CreateStudioLifecycleConfigRequest struct {
    StudioLifecycleConfigAppType StudioLifecycleConfigAppTypeEnum `json:"StudioLifecycleConfigAppType"`
    StudioLifecycleConfigContent string `json:"StudioLifecycleConfigContent"`
    StudioLifecycleConfigName string `json:"StudioLifecycleConfigName"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

