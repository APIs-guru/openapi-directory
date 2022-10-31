package shared



type SearchFacesByImageResponse struct {
    FaceMatches []FaceMatch `json:"FaceMatches,omitempty"`
    FaceModelVersion *string `json:"FaceModelVersion,omitempty"`
    SearchedFaceBoundingBox *BoundingBox `json:"SearchedFaceBoundingBox,omitempty"`
    SearchedFaceConfidence *float32 `json:"SearchedFaceConfidence,omitempty"`
    
}

