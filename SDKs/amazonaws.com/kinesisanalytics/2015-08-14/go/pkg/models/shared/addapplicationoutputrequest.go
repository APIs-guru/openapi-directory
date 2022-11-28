package shared

// AddApplicationOutputRequest
// <p/>
type AddApplicationOutputRequest struct {
	ApplicationName             string `json:"ApplicationName"`
	CurrentApplicationVersionID int64  `json:"CurrentApplicationVersionId"`
	Output                      Output `json:"Output"`
}
