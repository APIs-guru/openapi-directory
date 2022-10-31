package shared



type UserActivity struct {
    ActivityType string `json:"activityType"`
    PersistentIdentifier *string `json:"persistentIdentifier,omitempty"`
    Title *string `json:"title,omitempty"`
    UserInfo map[string]interface{} `json:"userInfo,omitempty"`
    Version string `json:"version"`
    
}

