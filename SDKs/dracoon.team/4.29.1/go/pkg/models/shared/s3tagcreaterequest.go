package shared

type S3TagCreateRequest struct {
	IsMandatory *bool  `json:"isMandatory"`
	Key         string `json:"key"`
	Value       string `json:"value"`
}
