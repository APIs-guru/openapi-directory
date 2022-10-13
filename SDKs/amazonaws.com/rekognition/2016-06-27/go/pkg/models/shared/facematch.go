package shared

type FaceMatch struct {
	Face       *Face    `json:"Face"`
	Similarity *float32 `json:"Similarity"`
}
