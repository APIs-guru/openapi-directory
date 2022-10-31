package shared

type SamsungPreviewSection struct {
	Position *int32                      `json:"position,omitempty"`
	Tiles    []SamsungPreviewSectionTile `json:"tiles"`
	Title    *string                     `json:"title,omitempty"`
}
