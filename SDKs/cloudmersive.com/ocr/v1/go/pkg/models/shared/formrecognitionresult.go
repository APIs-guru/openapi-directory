package shared

// FormRecognitionResult
// The result of extracting form field values
type FormRecognitionResult struct {
	BestMatchFormSettingName    *string       `json:"BestMatchFormSettingName,omitempty"`
	Diagnostics                 []string      `json:"Diagnostics,omitempty"`
	FieldValueExtractionResult  []FieldResult `json:"FieldValueExtractionResult,omitempty"`
	Successful                  *bool         `json:"Successful,omitempty"`
	TableValueExtractionResults []TableResult `json:"TableValueExtractionResults,omitempty"`
}
