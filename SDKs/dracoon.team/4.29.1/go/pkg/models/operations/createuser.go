package operations

import (
	"openapi/pkg/models/shared"
)

type CreateUserHeaders struct {
	XSdsAuthToken  *string      `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type CreateUserRequest struct {
	Headers CreateUserHeaders
	Request shared.CreateUserRequest `request:"mediaType=application/json"`
}

type CreateUserResponse struct {
	ContentType                       string
	ErrorResponse                     *shared.ErrorResponse
	StatusCode                        int64
	UserData                          *shared.UserData
	CreateUser400ApplicationJSONOneOf *interface{}
}
