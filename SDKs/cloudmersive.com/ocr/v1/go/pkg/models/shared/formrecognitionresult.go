package shared

type FormRecognitionResult struct {
	BestMatchFormSettingName    *string       `json:"BestMatchFormSettingName"`
	Diagnostics                 []string      `json:"Diagnostics"`
	FieldValueExtractionResult  []FieldResult `json:"FieldValueExtractionResult"`
	Successful                  *bool         `json:"Successful"`
	TableValueExtractionResults []TableResult `json:"TableValueExtractionResults"`
}
