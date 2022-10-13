package shared

type StyleEntity struct {
	ID        *int32       `json:"id"`
	Logo      *ImageEntity `json:"logo"`
	Path      *string      `json:"path"`
	Thumbnail *ImageEntity `json:"thumbnail"`
}
