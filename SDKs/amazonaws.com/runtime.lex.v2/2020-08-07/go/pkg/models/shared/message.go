package shared

type Message struct {
	Content           *string                `json:"content"`
	ContentType       MessageContentTypeEnum `json:"contentType"`
	ImageResponseCard *ImageResponseCard     `json:"imageResponseCard"`
}
