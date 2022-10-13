package shared

type Screenshot struct {
	Caption      *string       `json:"caption"`
	File         *File         `json:"file"`
	ID           *string       `json:"id"`
	Translations []Translation `json:"translations"`
}
