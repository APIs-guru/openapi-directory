package shared

type TagResourceRequest struct {
	ResourceArn string `json:"ResourceARN"`
	Tags        []Tag  `json:"Tags"`
}
