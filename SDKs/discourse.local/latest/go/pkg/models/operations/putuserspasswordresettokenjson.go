package operations

type PutUsersPasswordResetTokenJSONPathParams struct {
	Token string `pathParam:"style=simple,explode=false,name=token"`
}

type PutUsersPasswordResetTokenJSONRequest struct {
	PathParams PutUsersPasswordResetTokenJSONPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type PutUsersPasswordResetTokenJSONResponse struct {
	ContentType string
	StatusCode  int64
}
