package shared

type Error struct {
	Help    *string `json:"help"`
	Message *string `json:"message"`
	Phrase  *string `json:"phrase"`
}
