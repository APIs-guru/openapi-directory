package shared

type TagResourceRequest struct {
	InstanceArn string `json:"InstanceArn"`
	ResourceArn string `json:"ResourceArn"`
	Tags        []Tag  `json:"Tags"`
}
