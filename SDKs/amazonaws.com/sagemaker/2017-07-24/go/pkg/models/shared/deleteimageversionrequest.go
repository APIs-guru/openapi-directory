package shared

type DeleteImageVersionRequest struct {
	ImageName string `json:"ImageName"`
	Version   int64  `json:"Version"`
}
