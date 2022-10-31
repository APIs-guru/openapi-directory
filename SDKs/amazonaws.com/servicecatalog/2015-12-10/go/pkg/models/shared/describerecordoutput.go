package shared



type DescribeRecordOutput struct {
    NextPageToken *string `json:"NextPageToken,omitempty"`
    RecordDetail *RecordDetail `json:"RecordDetail,omitempty"`
    RecordOutputs []RecordOutput `json:"RecordOutputs,omitempty"`
    
}

