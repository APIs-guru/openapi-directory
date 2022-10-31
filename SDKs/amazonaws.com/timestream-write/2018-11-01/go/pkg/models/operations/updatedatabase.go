package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDatabaseXAmzTargetEnum string

const (
	UpdateDatabaseXAmzTargetEnumTimestream20181101UpdateDatabase UpdateDatabaseXAmzTargetEnum = "Timestream_20181101.UpdateDatabase"
)

type UpdateDatabaseHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateDatabaseXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateDatabaseRequest struct {
	Headers UpdateDatabaseHeaders
	Request shared.UpdateDatabaseRequest `request:"mediaType=application/json"`
}

type UpdateDatabaseResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	InvalidEndpointException      *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UpdateDatabaseResponse        *shared.UpdateDatabaseResponse
	ValidationException           *interface{}
}
