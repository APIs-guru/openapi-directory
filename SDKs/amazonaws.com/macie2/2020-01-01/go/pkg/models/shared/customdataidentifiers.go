package shared

type CustomDataIdentifiers struct {
	Detections []CustomDetection `json:"detections"`
	TotalCount *int64            `json:"totalCount"`
}
