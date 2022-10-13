package shared

type BigtableColumn struct {
	Encoding         *string `json:"encoding"`
	FieldName        *string `json:"fieldName"`
	OnlyReadLatest   *bool   `json:"onlyReadLatest"`
	QualifierEncoded *string `json:"qualifierEncoded"`
	QualifierString  *string `json:"qualifierString"`
	Type             *string `json:"type"`
}
