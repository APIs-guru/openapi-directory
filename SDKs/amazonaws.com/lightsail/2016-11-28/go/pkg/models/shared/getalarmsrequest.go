package shared



type GetAlarmsRequest struct {
    AlarmName *string `json:"alarmName,omitempty"`
    MonitoredResourceName *string `json:"monitoredResourceName,omitempty"`
    PageToken *string `json:"pageToken,omitempty"`
    
}

