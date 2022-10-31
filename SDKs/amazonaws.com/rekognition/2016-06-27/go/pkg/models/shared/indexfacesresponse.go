package shared



type IndexFacesResponse struct {
    FaceModelVersion *string `json:"FaceModelVersion,omitempty"`
    FaceRecords []FaceRecord `json:"FaceRecords,omitempty"`
    OrientationCorrection *OrientationCorrectionEnum `json:"OrientationCorrection,omitempty"`
    UnindexedFaces []UnindexedFace `json:"UnindexedFaces,omitempty"`
    
}

