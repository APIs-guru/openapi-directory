package operations

type DeleteOrganizationMemberPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
	UserID         string `pathParam:"style=simple,explode=false,name=userId"`
}

type DeleteOrganizationMemberRequest struct {
	PathParams DeleteOrganizationMemberPathParams
}

type DeleteOrganizationMemberResponse struct {
	ContentType string
	StatusCode  int64
}
