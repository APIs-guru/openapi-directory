package shared

type SamsungPreviewSection struct {
	Position *int32                      `json:"position"`
	Tiles    []SamsungPreviewSectionTile `json:"tiles"`
	Title    *string                     `json:"title"`
}
