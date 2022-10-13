package operations

type TeamsRemoveMembershipForUserPathParams struct {
	TeamID   int64  `pathParam:"style=simple,explode=false,name=team_id"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type TeamsRemoveMembershipForUserRequest struct {
	PathParams TeamsRemoveMembershipForUserPathParams
}

type TeamsRemoveMembershipForUserResponse struct {
	ContentType string
	StatusCode  int64
}
