package shared

// ResponseMetaData
// Response's metadata carrying additional information about the report content.
type ResponseMetaData struct {
	CurrencyCode              *string                    `json:"currencyCode,omitempty"`
	DataLossFromOtherRow      *bool                      `json:"dataLossFromOtherRow,omitempty"`
	EmptyReason               *string                    `json:"emptyReason,omitempty"`
	SchemaRestrictionResponse *SchemaRestrictionResponse `json:"schemaRestrictionResponse,omitempty"`
	SubjectToThresholding     *bool                      `json:"subjectToThresholding,omitempty"`
	TimeZone                  *string                    `json:"timeZone,omitempty"`
}
