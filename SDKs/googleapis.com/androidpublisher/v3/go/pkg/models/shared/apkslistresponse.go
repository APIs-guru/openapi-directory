package shared

type ApksListResponse struct {
	Apks []Apk   `json:"apks,omitempty"`
	Kind *string `json:"kind,omitempty"`
}
