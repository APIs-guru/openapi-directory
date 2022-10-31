package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserAccountHeaders struct {
	XSdsAuthToken  *string      `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type UpdateUserAccountRequest struct {
	Headers UpdateUserAccountHeaders
	Request shared.UpdateUserAccountRequest `request:"mediaType=application/json"`
}

type UpdateUserAccountResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
	UserAccount   *shared.UserAccount
}
