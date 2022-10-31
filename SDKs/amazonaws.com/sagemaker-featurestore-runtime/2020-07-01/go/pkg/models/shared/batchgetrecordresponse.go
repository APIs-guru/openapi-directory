package shared

type BatchGetRecordResponse struct {
	Errors                 []BatchGetRecordError        `json:"Errors"`
	Records                []BatchGetRecordResultDetail `json:"Records"`
	UnprocessedIdentifiers []BatchGetRecordIdentifier   `json:"UnprocessedIdentifiers"`
}
