package shared

type ListRecordHistoryOutput struct {
	NextPageToken *string        `json:"NextPageToken"`
	RecordDetails []RecordDetail `json:"RecordDetails"`
}
