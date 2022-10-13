package shared

type UserPhoto struct {
	Etag         *string `json:"etag"`
	Height       *int32  `json:"height"`
	ID           *string `json:"id"`
	Kind         *string `json:"kind"`
	MimeType     *string `json:"mimeType"`
	PhotoData    *string `json:"photoData"`
	PrimaryEmail *string `json:"primaryEmail"`
	Width        *int32  `json:"width"`
}
