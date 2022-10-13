package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFolderHeaders struct {
	XSdsAuthToken  *string      `header:"name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type CreateFolderRequest struct {
	Headers CreateFolderHeaders
	Request shared.CreateFolderRequest `request:"mediaType=application/json"`
}

type CreateFolderResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	Node          *shared.Node
	StatusCode    int64
}
