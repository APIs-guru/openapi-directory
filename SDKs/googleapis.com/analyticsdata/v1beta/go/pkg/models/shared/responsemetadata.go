package shared

type ResponseMetaData struct {
	CurrencyCode              *string                    `json:"currencyCode"`
	DataLossFromOtherRow      *bool                      `json:"dataLossFromOtherRow"`
	EmptyReason               *string                    `json:"emptyReason"`
	SchemaRestrictionResponse *SchemaRestrictionResponse `json:"schemaRestrictionResponse"`
	SubjectToThresholding     *bool                      `json:"subjectToThresholding"`
	TimeZone                  *string                    `json:"timeZone"`
}
