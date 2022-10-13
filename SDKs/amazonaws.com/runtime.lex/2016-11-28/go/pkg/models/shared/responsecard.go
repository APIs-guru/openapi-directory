package shared

type ResponseCard struct {
	ContentType        *ContentTypeEnum    `json:"contentType"`
	GenericAttachments []GenericAttachment `json:"genericAttachments"`
	Version            *string             `json:"version"`
}
