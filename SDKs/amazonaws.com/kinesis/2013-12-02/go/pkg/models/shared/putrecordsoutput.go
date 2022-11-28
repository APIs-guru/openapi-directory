package shared

// PutRecordsOutput
//
//	<code>PutRecords</code> results.
type PutRecordsOutput struct {
	EncryptionType    *EncryptionTypeEnum     `json:"EncryptionType,omitempty"`
	FailedRecordCount *int64                  `json:"FailedRecordCount,omitempty"`
	Records           []PutRecordsResultEntry `json:"Records"`
}
