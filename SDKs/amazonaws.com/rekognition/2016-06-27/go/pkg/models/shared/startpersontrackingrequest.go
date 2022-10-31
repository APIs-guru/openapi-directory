package shared



type StartPersonTrackingRequest struct {
    ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
    JobTag *string `json:"JobTag,omitempty"`
    NotificationChannel *NotificationChannel `json:"NotificationChannel,omitempty"`
    Video Video `json:"Video"`
    
}

