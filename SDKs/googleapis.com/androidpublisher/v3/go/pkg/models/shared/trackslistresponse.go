package shared

type TracksListResponse struct {
	Kind   *string `json:"kind"`
	Tracks []Track `json:"tracks"`
}
