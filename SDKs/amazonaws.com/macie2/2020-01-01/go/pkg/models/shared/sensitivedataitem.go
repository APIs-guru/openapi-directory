package shared

type SensitiveDataItem struct {
	Category   *SensitiveDataItemCategoryEnum `json:"category"`
	Detections []DefaultDetection             `json:"detections"`
	TotalCount *int64                         `json:"totalCount"`
}
