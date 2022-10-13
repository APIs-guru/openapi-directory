package shared

type ListPendingInvitationResourcesResponse struct {
	NextToken *string    `json:"nextToken"`
	Resources []Resource `json:"resources"`
}
