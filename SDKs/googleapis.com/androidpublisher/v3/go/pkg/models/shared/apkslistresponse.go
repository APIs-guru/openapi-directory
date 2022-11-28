package shared

// ApksListResponse
// Response listing all APKs.
type ApksListResponse struct {
	Apks []Apk   `json:"apks,omitempty"`
	Kind *string `json:"kind,omitempty"`
}
