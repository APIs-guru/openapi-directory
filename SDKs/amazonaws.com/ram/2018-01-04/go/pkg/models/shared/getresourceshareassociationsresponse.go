package shared

type GetResourceShareAssociationsResponse struct {
	NextToken                 *string                    `json:"nextToken,omitempty"`
	ResourceShareAssociations []ResourceShareAssociation `json:"resourceShareAssociations,omitempty"`
}
