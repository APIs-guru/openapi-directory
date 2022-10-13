package shared

type GenericAttachment struct {
	AttachmentLinkURL *string  `json:"attachmentLinkUrl"`
	Buttons           []Button `json:"buttons"`
	ImageURL          *string  `json:"imageUrl"`
	SubTitle          *string  `json:"subTitle"`
	Title             *string  `json:"title"`
}
