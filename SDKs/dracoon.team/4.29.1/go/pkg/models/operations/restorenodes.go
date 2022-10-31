package operations

import (
	"openapi/pkg/models/shared"
)

type RestoreNodesHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type RestoreNodesRequest struct {
	Headers RestoreNodesHeaders
	Request shared.RestoreDeletedNodesRequest `request:"mediaType=application/json"`
}

type RestoreNodesResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
