package shared

type SQLApplicationConfiguration struct {
	Inputs               []Input               `json:"Inputs,omitempty"`
	Outputs              []Output              `json:"Outputs,omitempty"`
	ReferenceDataSources []ReferenceDataSource `json:"ReferenceDataSources,omitempty"`
}
