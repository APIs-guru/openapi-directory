package shared



type ApnsPushNotificationTemplate struct {
    Action *ActionEnum `json:"Action,omitempty"`
    Body *string `json:"Body,omitempty"`
    MediaURL *string `json:"MediaUrl,omitempty"`
    RawContent *string `json:"RawContent,omitempty"`
    Sound *string `json:"Sound,omitempty"`
    Title *string `json:"Title,omitempty"`
    URL *string `json:"Url,omitempty"`
    
}

