package shared

type AddApplicationReferenceDataSourceResponse struct {
	ApplicationArn                  *string                          `json:"ApplicationARN,omitempty"`
	ApplicationVersionID            *int64                           `json:"ApplicationVersionId,omitempty"`
	ReferenceDataSourceDescriptions []ReferenceDataSourceDescription `json:"ReferenceDataSourceDescriptions,omitempty"`
}
