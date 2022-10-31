package operations

type OrgsCheckMembershipForUserPathParams struct {
	Org      string `pathParam:"style=simple,explode=false,name=org"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type OrgsCheckMembershipForUserRequest struct {
	PathParams OrgsCheckMembershipForUserPathParams
}

type OrgsCheckMembershipForUserResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
