package shared



type GetAlarmsResult struct {
    Alarms []Alarm `json:"alarms,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

