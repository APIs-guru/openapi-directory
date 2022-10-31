package shared

type StartFaceDetectionRequest struct {
	ClientRequestToken  *string              `json:"ClientRequestToken,omitempty"`
	FaceAttributes      *FaceAttributesEnum  `json:"FaceAttributes,omitempty"`
	JobTag              *string              `json:"JobTag,omitempty"`
	NotificationChannel *NotificationChannel `json:"NotificationChannel,omitempty"`
	Video               Video                `json:"Video"`
}
