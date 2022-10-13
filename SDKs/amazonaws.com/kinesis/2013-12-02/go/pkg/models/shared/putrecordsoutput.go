package shared

type PutRecordsOutput struct {
	EncryptionType    *EncryptionTypeEnum     `json:"EncryptionType"`
	FailedRecordCount *int64                  `json:"FailedRecordCount"`
	Records           []PutRecordsResultEntry `json:"Records"`
}
