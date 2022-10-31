package operations

import (
	"openapi/pkg/models/shared"
)

type PutInstancePublicPortsXAmzTargetEnum string

const (
	PutInstancePublicPortsXAmzTargetEnumLightsail20161128PutInstancePublicPorts PutInstancePublicPortsXAmzTargetEnum = "Lightsail_20161128.PutInstancePublicPorts"
)

type PutInstancePublicPortsHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutInstancePublicPortsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PutInstancePublicPortsRequest struct {
	Headers PutInstancePublicPortsHeaders
	Request shared.PutInstancePublicPortsRequest `request:"mediaType=application/json"`
}

type PutInstancePublicPortsResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	PutInstancePublicPortsResult    *shared.PutInstancePublicPortsResult
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
