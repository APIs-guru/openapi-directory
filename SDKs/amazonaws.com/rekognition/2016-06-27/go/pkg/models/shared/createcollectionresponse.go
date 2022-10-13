package shared

type CreateCollectionResponse struct {
	CollectionArn    *string `json:"CollectionArn"`
	FaceModelVersion *string `json:"FaceModelVersion"`
	StatusCode       *int64  `json:"StatusCode"`
}
