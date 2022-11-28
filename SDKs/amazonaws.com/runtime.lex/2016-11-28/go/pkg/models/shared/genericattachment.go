package shared

// GenericAttachment
// Represents an option rendered to the user when a prompt is shown. It could be an image, a button, a link, or text.
type GenericAttachment struct {
	AttachmentLinkURL *string  `json:"attachmentLinkUrl,omitempty"`
	Buttons           []Button `json:"buttons,omitempty"`
	ImageURL          *string  `json:"imageUrl,omitempty"`
	SubTitle          *string  `json:"subTitle,omitempty"`
	Title             *string  `json:"title,omitempty"`
}
