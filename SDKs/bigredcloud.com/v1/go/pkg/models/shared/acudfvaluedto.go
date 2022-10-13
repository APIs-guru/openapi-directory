package shared

type AcudfValueDto struct {
	Description        *string `json:"description"`
	ID                 *int64  `json:"id"`
	UserDefinedFieldID *int64  `json:"userDefinedFieldId"`
	Value              *string `json:"value"`
}
