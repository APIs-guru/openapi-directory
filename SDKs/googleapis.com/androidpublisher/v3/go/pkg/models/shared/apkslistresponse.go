package shared

type ApksListResponse struct {
	Apks []Apk   `json:"apks"`
	Kind *string `json:"kind"`
}
