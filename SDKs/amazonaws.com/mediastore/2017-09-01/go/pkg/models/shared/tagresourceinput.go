package shared

type TagResourceInput struct {
	Resource string `json:"Resource"`
	Tags     []Tag  `json:"Tags"`
}
