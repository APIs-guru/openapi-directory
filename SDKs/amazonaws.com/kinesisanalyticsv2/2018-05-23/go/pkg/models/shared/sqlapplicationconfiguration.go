package shared

type SQLApplicationConfiguration struct {
	Inputs               []Input               `json:"Inputs"`
	Outputs              []Output              `json:"Outputs"`
	ReferenceDataSources []ReferenceDataSource `json:"ReferenceDataSources"`
}
