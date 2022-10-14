package shared

type StartFaceSearchRequest struct {
	ClientRequestToken  *string              `json:"ClientRequestToken,omitempty"`
	CollectionID        string               `json:"CollectionId"`
	FaceMatchThreshold  *float32             `json:"FaceMatchThreshold,omitempty"`
	JobTag              *string              `json:"JobTag,omitempty"`
	NotificationChannel *NotificationChannel `json:"NotificationChannel,omitempty"`
	Video               Video                `json:"Video"`
}
