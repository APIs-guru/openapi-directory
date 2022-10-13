package operations

import (
	"openapi/pkg/models/shared"
)

type UsersGetByUsernamePathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type UsersGetByUsernameRequest struct {
	PathParams UsersGetByUsernamePathParams
}

type UsersGetByUsernameResponse struct {
	ContentType                               string
	StatusCode                                int64
	BasicError                                *shared.BasicError
	UsersGetByUsername200ApplicationJSONOneOf *interface{}
}
