package shared



type NotificationSet struct {
    Notification []Notification `json:"notification,omitempty"`
    NotificationSetID *string `json:"notificationSetId,omitempty"`
    
}

