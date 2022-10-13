package shared

type FieldResult struct {
	FieldValues []OcrPhotoTextElement `json:"FieldValues"`
	TargetField *FormFieldDefinition  `json:"TargetField"`
}
