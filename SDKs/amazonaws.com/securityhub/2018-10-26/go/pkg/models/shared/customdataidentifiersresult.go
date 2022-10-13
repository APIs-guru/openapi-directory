package shared

type CustomDataIdentifiersResult struct {
	Detections []CustomDataIdentifiersDetections `json:"Detections"`
	TotalCount *int64                            `json:"TotalCount"`
}
