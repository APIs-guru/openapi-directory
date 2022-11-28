package shared

// PutRecordsInput
// A <code>PutRecords</code> request.
type PutRecordsInput struct {
	Records    []PutRecordsRequestEntry `json:"Records"`
	StreamName string                   `json:"StreamName"`
}
