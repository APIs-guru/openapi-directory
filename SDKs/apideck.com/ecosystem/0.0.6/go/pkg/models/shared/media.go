package shared

type MediaTypeEnum string

const (
	MediaTypeEnumScreenshot MediaTypeEnum = "SCREENSHOT"
	MediaTypeEnumVideo      MediaTypeEnum = "VIDEO"
)

type Media struct {
	Caption      *string        `json:"caption"`
	ID           *string        `json:"id"`
	Sequence     *int64         `json:"sequence"`
	Translations []Translation  `json:"translations"`
	Type         *MediaTypeEnum `json:"type"`
	URL          string         `json:"url"`
}
