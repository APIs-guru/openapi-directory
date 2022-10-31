package shared



type TestAlarmRequest struct {
    AlarmName string `json:"alarmName"`
    State AlarmStateEnum `json:"state"`
    
}

