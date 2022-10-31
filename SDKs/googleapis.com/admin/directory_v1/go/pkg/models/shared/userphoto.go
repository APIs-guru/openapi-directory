package shared

type UserPhoto struct {
	Etag         *string `json:"etag,omitempty"`
	Height       *int32  `json:"height,omitempty"`
	ID           *string `json:"id,omitempty"`
	Kind         *string `json:"kind,omitempty"`
	MimeType     *string `json:"mimeType,omitempty"`
	PhotoData    *string `json:"photoData,omitempty"`
	PrimaryEmail *string `json:"primaryEmail,omitempty"`
	Width        *int32  `json:"width,omitempty"`
}
