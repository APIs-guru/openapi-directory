package shared

type StartFaceDetectionRequest struct {
	ClientRequestToken  *string              `json:"ClientRequestToken"`
	FaceAttributes      *FaceAttributesEnum  `json:"FaceAttributes"`
	JobTag              *string              `json:"JobTag"`
	NotificationChannel *NotificationChannel `json:"NotificationChannel"`
	Video               Video                `json:"Video"`
}
