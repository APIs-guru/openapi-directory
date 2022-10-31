package shared



type DefaultPushNotificationMessage struct {
    Action *ActionEnum `json:"Action,omitempty"`
    Body *string `json:"Body,omitempty"`
    Data map[string]string `json:"Data,omitempty"`
    SilentPush *bool `json:"SilentPush,omitempty"`
    Substitutions map[string][]string `json:"Substitutions,omitempty"`
    Title *string `json:"Title,omitempty"`
    URL *string `json:"Url,omitempty"`
    
}

