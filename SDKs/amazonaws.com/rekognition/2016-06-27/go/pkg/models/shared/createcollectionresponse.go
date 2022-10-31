package shared



type CreateCollectionResponse struct {
    CollectionArn *string `json:"CollectionArn,omitempty"`
    FaceModelVersion *string `json:"FaceModelVersion,omitempty"`
    StatusCode *int64 `json:"StatusCode,omitempty"`
    
}

