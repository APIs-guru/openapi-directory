package shared

type Message struct {
	CustomPayload     *CustomPayload     `json:"customPayload"`
	ImageResponseCard *ImageResponseCard `json:"imageResponseCard"`
	PlainTextMessage  *PlainTextMessage  `json:"plainTextMessage"`
	SsmlMessage       *SsmlMessage       `json:"ssmlMessage"`
}
