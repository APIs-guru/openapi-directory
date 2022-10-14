package shared

type FieldResult struct {
	FieldValues []OcrPhotoTextElement `json:"FieldValues,omitempty"`
	TargetField *FormFieldDefinition  `json:"TargetField,omitempty"`
}
