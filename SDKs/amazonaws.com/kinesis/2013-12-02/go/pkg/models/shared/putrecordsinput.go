package shared

type PutRecordsInput struct {
	Records    []PutRecordsRequestEntry `json:"Records"`
	StreamName string                   `json:"StreamName"`
}
