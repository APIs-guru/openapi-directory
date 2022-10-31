package shared

type GetEffectivePermissionsForPathRequest struct {
	CatalogID   *string `json:"CatalogId,omitempty"`
	MaxResults  *int64  `json:"MaxResults,omitempty"`
	NextToken   *string `json:"NextToken,omitempty"`
	ResourceArn string  `json:"ResourceArn"`
}
