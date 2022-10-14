package shared

type Screenshot struct {
	Caption      *string       `json:"caption,omitempty"`
	File         *File         `json:"file,omitempty"`
	ID           *string       `json:"id,omitempty"`
	Translations []Translation `json:"translations,omitempty"`
}
