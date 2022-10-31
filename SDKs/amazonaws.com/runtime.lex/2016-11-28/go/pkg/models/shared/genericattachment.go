package shared



type GenericAttachment struct {
    AttachmentLinkURL *string `json:"attachmentLinkUrl,omitempty"`
    Buttons []Button `json:"buttons,omitempty"`
    ImageURL *string `json:"imageUrl,omitempty"`
    SubTitle *string `json:"subTitle,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

