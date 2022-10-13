package shared

type IndexFacesResponse struct {
	FaceModelVersion      *string                    `json:"FaceModelVersion"`
	FaceRecords           []FaceRecord               `json:"FaceRecords"`
	OrientationCorrection *OrientationCorrectionEnum `json:"OrientationCorrection"`
	UnindexedFaces        []UnindexedFace            `json:"UnindexedFaces"`
}
