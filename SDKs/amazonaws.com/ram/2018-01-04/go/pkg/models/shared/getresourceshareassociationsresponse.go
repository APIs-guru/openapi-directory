package shared

type GetResourceShareAssociationsResponse struct {
	NextToken                 *string                    `json:"nextToken"`
	ResourceShareAssociations []ResourceShareAssociation `json:"resourceShareAssociations"`
}
