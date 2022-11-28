package shared

// SensitiveDataItem
// Provides information about the category, types, and occurrences of sensitive data that produced a sensitive data finding.
type SensitiveDataItem struct {
	Category   *SensitiveDataItemCategoryEnum `json:"category,omitempty"`
	Detections []DefaultDetection             `json:"detections,omitempty"`
	TotalCount *int64                         `json:"totalCount,omitempty"`
}
