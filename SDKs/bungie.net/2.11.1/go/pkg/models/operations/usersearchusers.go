package operations

type UserSearchUsersQueryParams struct {
	Q *string `queryParam:"style=form,explode=true,name=q"`
}

type UserSearchUsersRequest struct {
	QueryParams UserSearchUsersQueryParams
}

type UserSearchUsersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
