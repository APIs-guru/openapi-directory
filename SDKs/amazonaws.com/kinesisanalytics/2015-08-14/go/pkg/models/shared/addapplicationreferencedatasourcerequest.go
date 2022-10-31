package shared

type AddApplicationReferenceDataSourceRequest struct {
	ApplicationName             string              `json:"ApplicationName"`
	CurrentApplicationVersionID int64               `json:"CurrentApplicationVersionId"`
	ReferenceDataSource         ReferenceDataSource `json:"ReferenceDataSource"`
}
