package operations

type OrgsUnblockUserPathParams struct {
	Org      string `pathParam:"style=simple,explode=false,name=org"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type OrgsUnblockUserRequest struct {
	PathParams OrgsUnblockUserPathParams
}

type OrgsUnblockUserResponse struct {
	ContentType string
	StatusCode  int64
}
