package shared

type MediaTypeEnum string

const (
	MediaTypeEnumScreenshot MediaTypeEnum = "SCREENSHOT"
	MediaTypeEnumVideo      MediaTypeEnum = "VIDEO"
)

type Media struct {
	Caption      *string        `json:"caption,omitempty"`
	ID           *string        `json:"id,omitempty"`
	Sequence     *int64         `json:"sequence,omitempty"`
	Translations []Translation  `json:"translations,omitempty"`
	Type         *MediaTypeEnum `json:"type,omitempty"`
	URL          string         `json:"url"`
}
