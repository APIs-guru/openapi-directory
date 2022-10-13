package shared

type AdStyleColors struct {
	Background *string `json:"background"`
	Border     *string `json:"border"`
	Text       *string `json:"text"`
	Title      *string `json:"title"`
	URL        *string `json:"url"`
}

type AdStyleFont struct {
	Family *string `json:"family"`
	Size   *string `json:"size"`
}

type AdStyle struct {
	Colors  *AdStyleColors `json:"colors"`
	Corners *string        `json:"corners"`
	Font    *AdStyleFont   `json:"font"`
	Kind    *string        `json:"kind"`
}
