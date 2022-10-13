package shared

type GetEffectivePermissionsForPathRequest struct {
	CatalogID   *string `json:"CatalogId"`
	MaxResults  *int64  `json:"MaxResults"`
	NextToken   *string `json:"NextToken"`
	ResourceArn string  `json:"ResourceArn"`
}
