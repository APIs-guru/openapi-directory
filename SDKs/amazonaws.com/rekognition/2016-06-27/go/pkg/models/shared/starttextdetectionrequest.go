package shared



type StartTextDetectionRequest struct {
    ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
    Filters *StartTextDetectionFilters `json:"Filters,omitempty"`
    JobTag *string `json:"JobTag,omitempty"`
    NotificationChannel *NotificationChannel `json:"NotificationChannel,omitempty"`
    Video Video `json:"Video"`
    
}

