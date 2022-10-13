package operations

import (
	"openapi/pkg/models/shared"
)

type GetContactPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetContactRequest struct {
	PathParams GetContactPathParams
}

type GetContactResponse struct {
	ContentType            string
	NotFound               *shared.NotFound
	StatusCode             int64
	StudentContactResponse *shared.StudentContactResponse
}
