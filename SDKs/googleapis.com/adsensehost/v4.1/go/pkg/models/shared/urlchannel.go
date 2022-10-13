package shared

type URLChannel struct {
	ID         *string `json:"id"`
	Kind       *string `json:"kind"`
	URLPattern *string `json:"urlPattern"`
}
