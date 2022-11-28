package shared

// UnindexedFace
// A face that <a>IndexFaces</a> detected, but didn't index. Use the <code>Reasons</code> response attribute to determine why a face wasn't indexed.
type UnindexedFace struct {
	FaceDetail *FaceDetail  `json:"FaceDetail,omitempty"`
	Reasons    []ReasonEnum `json:"Reasons,omitempty"`
}
