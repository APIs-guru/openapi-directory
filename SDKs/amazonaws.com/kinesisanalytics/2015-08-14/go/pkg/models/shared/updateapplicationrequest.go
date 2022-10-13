package shared

type UpdateApplicationRequest struct {
	ApplicationName             string            `json:"ApplicationName"`
	ApplicationUpdate           ApplicationUpdate `json:"ApplicationUpdate"`
	CurrentApplicationVersionID int64             `json:"CurrentApplicationVersionId"`
}
