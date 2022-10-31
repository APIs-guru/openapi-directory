package shared

type TagResourceRequest struct {
	ResourceArn string            `json:"ResourceArn"`
	Tags        map[string]string `json:"Tags"`
}
