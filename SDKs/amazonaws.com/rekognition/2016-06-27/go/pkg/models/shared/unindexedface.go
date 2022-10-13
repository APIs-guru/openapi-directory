package shared

type UnindexedFace struct {
	FaceDetail *FaceDetail  `json:"FaceDetail"`
	Reasons    []ReasonEnum `json:"Reasons"`
}
