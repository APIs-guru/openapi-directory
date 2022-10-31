package shared



type AcudfValueDto struct {
    Description *string `json:"description,omitempty"`
    ID *int64 `json:"id,omitempty"`
    UserDefinedFieldID *int64 `json:"userDefinedFieldId,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

