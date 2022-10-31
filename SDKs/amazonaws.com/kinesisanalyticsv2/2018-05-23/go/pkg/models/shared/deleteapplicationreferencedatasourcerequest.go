package shared

type DeleteApplicationReferenceDataSourceRequest struct {
	ApplicationName             string `json:"ApplicationName"`
	CurrentApplicationVersionID int64  `json:"CurrentApplicationVersionId"`
	ReferenceID                 string `json:"ReferenceId"`
}
