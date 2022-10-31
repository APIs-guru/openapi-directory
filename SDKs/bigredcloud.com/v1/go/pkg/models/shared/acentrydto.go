package shared



type AcEntryDto struct {
    AccountCode *string `json:"accountCode,omitempty"`
    AnalysisCategoryID *int64 `json:"analysisCategoryId,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Value *float64 `json:"value,omitempty"`
    
}

