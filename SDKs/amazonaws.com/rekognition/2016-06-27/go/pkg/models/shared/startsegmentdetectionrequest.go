package shared



type StartSegmentDetectionRequest struct {
    ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
    Filters *StartSegmentDetectionFilters `json:"Filters,omitempty"`
    JobTag *string `json:"JobTag,omitempty"`
    NotificationChannel *NotificationChannel `json:"NotificationChannel,omitempty"`
    SegmentTypes []SegmentTypeEnum `json:"SegmentTypes"`
    Video Video `json:"Video"`
    
}

