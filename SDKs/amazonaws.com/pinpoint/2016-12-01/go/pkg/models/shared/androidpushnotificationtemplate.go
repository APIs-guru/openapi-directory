package shared



type AndroidPushNotificationTemplate struct {
    Action *ActionEnum `json:"Action,omitempty"`
    Body *string `json:"Body,omitempty"`
    ImageIconURL *string `json:"ImageIconUrl,omitempty"`
    ImageURL *string `json:"ImageUrl,omitempty"`
    RawContent *string `json:"RawContent,omitempty"`
    SmallImageIconURL *string `json:"SmallImageIconUrl,omitempty"`
    Sound *string `json:"Sound,omitempty"`
    Title *string `json:"Title,omitempty"`
    URL *string `json:"Url,omitempty"`
    
}

