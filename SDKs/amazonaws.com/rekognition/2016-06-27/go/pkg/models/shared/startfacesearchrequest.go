package shared

type StartFaceSearchRequest struct {
	ClientRequestToken  *string              `json:"ClientRequestToken"`
	CollectionID        string               `json:"CollectionId"`
	FaceMatchThreshold  *float32             `json:"FaceMatchThreshold"`
	JobTag              *string              `json:"JobTag"`
	NotificationChannel *NotificationChannel `json:"NotificationChannel"`
	Video               Video                `json:"Video"`
}
