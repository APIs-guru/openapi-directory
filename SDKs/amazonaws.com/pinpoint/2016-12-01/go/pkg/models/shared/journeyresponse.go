package shared



type JourneyResponse struct {
    Activities map[string]Activity `json:"Activities,omitempty"`
    ApplicationID string `json:"ApplicationId"`
    CreationDate *string `json:"CreationDate,omitempty"`
    ID string `json:"Id"`
    LastModifiedDate *string `json:"LastModifiedDate,omitempty"`
    Limits *JourneyLimits `json:"Limits,omitempty"`
    LocalTime *bool `json:"LocalTime,omitempty"`
    Name string `json:"Name"`
    QuietTime *QuietTime `json:"QuietTime,omitempty"`
    RefreshFrequency *string `json:"RefreshFrequency,omitempty"`
    RefreshOnSegmentUpdate *bool `json:"RefreshOnSegmentUpdate,omitempty"`
    Schedule *JourneySchedule `json:"Schedule,omitempty"`
    StartActivity *string `json:"StartActivity,omitempty"`
    StartCondition *StartCondition `json:"StartCondition,omitempty"`
    State *StateEnum `json:"State,omitempty"`
    WaitForQuietTime *bool `json:"WaitForQuietTime,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

