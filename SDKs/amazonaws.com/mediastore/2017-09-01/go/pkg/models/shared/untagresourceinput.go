package shared

type UntagResourceInput struct {
	Resource string   `json:"Resource"`
	TagKeys  []string `json:"TagKeys"`
}
