package shared

// StyleEntity
// Show Style
type StyleEntity struct {
	ID        *int32       `json:"id,omitempty"`
	Logo      *ImageEntity `json:"logo,omitempty"`
	Path      *string      `json:"path,omitempty"`
	Thumbnail *ImageEntity `json:"thumbnail,omitempty"`
}
