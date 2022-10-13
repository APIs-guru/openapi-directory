package shared

type GetAlarmsRequest struct {
	AlarmName             *string `json:"alarmName"`
	MonitoredResourceName *string `json:"monitoredResourceName"`
	PageToken             *string `json:"pageToken"`
}
