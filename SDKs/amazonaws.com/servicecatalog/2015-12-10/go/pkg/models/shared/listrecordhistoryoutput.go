package shared



type ListRecordHistoryOutput struct {
    NextPageToken *string `json:"NextPageToken,omitempty"`
    RecordDetails []RecordDetail `json:"RecordDetails,omitempty"`
    
}

