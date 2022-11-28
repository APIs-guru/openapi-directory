package shared

// FieldResult
// A pairing target field and actual value read from form
type FieldResult struct {
	FieldValues []OcrPhotoTextElement `json:"FieldValues,omitempty"`
	TargetField *FormFieldDefinition  `json:"TargetField,omitempty"`
}
