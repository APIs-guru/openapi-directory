package shared

// AddApplicationInputRequest
// <p/>
type AddApplicationInputRequest struct {
	ApplicationName             string `json:"ApplicationName"`
	CurrentApplicationVersionID int64  `json:"CurrentApplicationVersionId"`
	Input                       Input  `json:"Input"`
}
