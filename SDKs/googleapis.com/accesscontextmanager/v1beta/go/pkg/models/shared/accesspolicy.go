package shared

type AccessPolicy struct {
	Name   *string `json:"name"`
	Parent *string `json:"parent"`
	Title  *string `json:"title"`
}
