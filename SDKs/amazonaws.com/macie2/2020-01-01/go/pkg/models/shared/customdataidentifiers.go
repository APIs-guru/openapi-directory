package shared

type CustomDataIdentifiers struct {
	Detections []CustomDetection `json:"detections,omitempty"`
	TotalCount *int64            `json:"totalCount,omitempty"`
}
