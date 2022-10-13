package shared

type TagResourceInput struct {
	ResourceArn string        `json:"resourceArn"`
	Tags        []ResourceTag `json:"tags"`
}
