package shared

type AccountRef struct {
	Href *string `json:"href"`
	ID   *string `json:"id"`
	Kind *string `json:"kind"`
	Name *string `json:"name"`
}
