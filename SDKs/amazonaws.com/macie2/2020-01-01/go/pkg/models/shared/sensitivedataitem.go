package shared

type SensitiveDataItem struct {
	Category   *SensitiveDataItemCategoryEnum `json:"category,omitempty"`
	Detections []DefaultDetection             `json:"detections,omitempty"`
	TotalCount *int64                         `json:"totalCount,omitempty"`
}
