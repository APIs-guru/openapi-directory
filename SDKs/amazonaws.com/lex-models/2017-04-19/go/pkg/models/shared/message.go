package shared

type Message struct {
	Content     string          `json:"content"`
	ContentType ContentTypeEnum `json:"contentType"`
	GroupNumber *int64          `json:"groupNumber"`
}
