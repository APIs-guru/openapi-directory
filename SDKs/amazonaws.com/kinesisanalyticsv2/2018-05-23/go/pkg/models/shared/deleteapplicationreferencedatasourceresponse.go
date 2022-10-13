package shared

type DeleteApplicationReferenceDataSourceResponse struct {
	ApplicationArn       *string `json:"ApplicationARN"`
	ApplicationVersionID *int64  `json:"ApplicationVersionId"`
}
