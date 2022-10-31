package operations

type PostUsersId2faResetPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PostUsersId2faResetRequest struct {
	PathParams PostUsersId2faResetPathParams
}

type PostUsersId2faResetResponse struct {
	ContentType string
	StatusCode  int64
}
