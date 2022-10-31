package shared

type ResponseMetaData struct {
	CurrencyCode              *string                    `json:"currencyCode,omitempty"`
	DataLossFromOtherRow      *bool                      `json:"dataLossFromOtherRow,omitempty"`
	EmptyReason               *string                    `json:"emptyReason,omitempty"`
	SchemaRestrictionResponse *SchemaRestrictionResponse `json:"schemaRestrictionResponse,omitempty"`
	SubjectToThresholding     *bool                      `json:"subjectToThresholding,omitempty"`
	TimeZone                  *string                    `json:"timeZone,omitempty"`
}
