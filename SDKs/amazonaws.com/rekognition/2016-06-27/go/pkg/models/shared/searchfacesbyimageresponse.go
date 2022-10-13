package shared

type SearchFacesByImageResponse struct {
	FaceMatches             []FaceMatch  `json:"FaceMatches"`
	FaceModelVersion        *string      `json:"FaceModelVersion"`
	SearchedFaceBoundingBox *BoundingBox `json:"SearchedFaceBoundingBox"`
	SearchedFaceConfidence  *float32     `json:"SearchedFaceConfidence"`
}
