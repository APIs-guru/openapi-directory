package operations

import (
	"openapi/pkg/models/shared"
)

type GetStudentForContactPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetStudentForContactRequest struct {
	PathParams GetStudentForContactPathParams
}

type GetStudentForContactResponse struct {
	ContentType     string
	NotFound        *shared.NotFound
	StatusCode      int64
	StudentResponse *shared.StudentResponse
}
