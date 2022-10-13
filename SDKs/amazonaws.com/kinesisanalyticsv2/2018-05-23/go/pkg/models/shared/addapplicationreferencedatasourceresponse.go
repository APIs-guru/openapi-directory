package shared

type AddApplicationReferenceDataSourceResponse struct {
	ApplicationArn                  *string                          `json:"ApplicationARN"`
	ApplicationVersionID            *int64                           `json:"ApplicationVersionId"`
	ReferenceDataSourceDescriptions []ReferenceDataSourceDescription `json:"ReferenceDataSourceDescriptions"`
}
