package shared

type ListPermissionsRequest struct {
	CatalogID    *string                   `json:"CatalogId,omitempty"`
	MaxResults   *int64                    `json:"MaxResults,omitempty"`
	NextToken    *string                   `json:"NextToken,omitempty"`
	Principal    *DataLakePrincipal        `json:"Principal,omitempty"`
	Resource     *Resource                 `json:"Resource,omitempty"`
	ResourceType *DataLakeResourceTypeEnum `json:"ResourceType,omitempty"`
}
