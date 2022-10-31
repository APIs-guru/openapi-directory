package shared

type TagResourceRequest struct {
	Arn  string `json:"Arn"`
	Tags []Tag  `json:"Tags"`
}
