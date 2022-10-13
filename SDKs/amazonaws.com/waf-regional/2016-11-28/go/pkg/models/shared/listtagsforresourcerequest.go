package shared

type ListTagsForResourceRequest struct {
	Limit       *int64  `json:"Limit"`
	NextMarker  *string `json:"NextMarker"`
	ResourceArn string  `json:"ResourceARN"`
}
