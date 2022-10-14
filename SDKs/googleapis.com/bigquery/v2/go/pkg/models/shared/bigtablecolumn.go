package shared

type BigtableColumn struct {
	Encoding         *string `json:"encoding,omitempty"`
	FieldName        *string `json:"fieldName,omitempty"`
	OnlyReadLatest   *bool   `json:"onlyReadLatest,omitempty"`
	QualifierEncoded *string `json:"qualifierEncoded,omitempty"`
	QualifierString  *string `json:"qualifierString,omitempty"`
	Type             *string `json:"type,omitempty"`
}
