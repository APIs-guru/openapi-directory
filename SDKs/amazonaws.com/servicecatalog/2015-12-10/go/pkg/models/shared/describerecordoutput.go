package shared

type DescribeRecordOutput struct {
	NextPageToken *string        `json:"NextPageToken"`
	RecordDetail  *RecordDetail  `json:"RecordDetail"`
	RecordOutputs []RecordOutput `json:"RecordOutputs"`
}
