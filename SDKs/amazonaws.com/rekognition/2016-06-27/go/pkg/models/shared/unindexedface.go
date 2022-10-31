package shared

type UnindexedFace struct {
	FaceDetail *FaceDetail  `json:"FaceDetail,omitempty"`
	Reasons    []ReasonEnum `json:"Reasons,omitempty"`
}
