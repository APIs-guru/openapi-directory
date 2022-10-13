package shared

type GetAlarmsResult struct {
	Alarms        []Alarm `json:"alarms"`
	NextPageToken *string `json:"nextPageToken"`
}
