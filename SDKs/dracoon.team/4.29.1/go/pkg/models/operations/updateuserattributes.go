package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserAttributesPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type UpdateUserAttributesHeaders struct {
	XSdsAuthToken  *string      `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type UpdateUserAttributesRequest struct {
	PathParams UpdateUserAttributesPathParams
	Headers    UpdateUserAttributesHeaders
	Request    shared.UserAttributes `request:"mediaType=application/json"`
}

type UpdateUserAttributesResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
	UserData      *shared.UserData
}
