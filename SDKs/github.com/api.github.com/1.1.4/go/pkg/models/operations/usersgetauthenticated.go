package operations

import (
	"openapi/pkg/models/shared"
)

type UsersGetAuthenticatedResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	BasicError                                   *shared.BasicError
	UsersGetAuthenticated200ApplicationJSONOneOf *interface{}
}
