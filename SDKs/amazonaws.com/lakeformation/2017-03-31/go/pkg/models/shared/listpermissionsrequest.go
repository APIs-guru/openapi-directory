package shared

type ListPermissionsRequest struct {
	CatalogID    *string                   `json:"CatalogId"`
	MaxResults   *int64                    `json:"MaxResults"`
	NextToken    *string                   `json:"NextToken"`
	Principal    *DataLakePrincipal        `json:"Principal"`
	Resource     *Resource                 `json:"Resource"`
	ResourceType *DataLakeResourceTypeEnum `json:"ResourceType"`
}
