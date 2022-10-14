package shared

type DeleteApplicationReferenceDataSourceResponse struct {
	ApplicationArn       *string `json:"ApplicationARN,omitempty"`
	ApplicationVersionID *int64  `json:"ApplicationVersionId,omitempty"`
}
