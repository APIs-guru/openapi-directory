package shared

type Links struct {
	Invitation *string `json:"invitation,omitempty"`
	Share      *string `json:"share,omitempty"`
}
