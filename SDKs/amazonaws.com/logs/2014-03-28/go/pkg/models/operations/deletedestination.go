package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDestinationXAmzTargetEnum string

const (
	DeleteDestinationXAmzTargetEnumLogs20140328DeleteDestination DeleteDestinationXAmzTargetEnum = "Logs_20140328.DeleteDestination"
)

type DeleteDestinationHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteDestinationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteDestinationRequest struct {
	Headers DeleteDestinationHeaders
	Request shared.DeleteDestinationRequest `request:"mediaType=application/json"`
}

type DeleteDestinationResponse struct {
	ContentType                 string
	InvalidParameterException   *interface{}
	OperationAbortedException   *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
