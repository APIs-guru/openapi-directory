package operations

import (
	"openapi/pkg/models/shared"
)

type OpenInstancePublicPortsXAmzTargetEnum string

const (
	OpenInstancePublicPortsXAmzTargetEnumLightsail20161128OpenInstancePublicPorts OpenInstancePublicPortsXAmzTargetEnum = "Lightsail_20161128.OpenInstancePublicPorts"
)

type OpenInstancePublicPortsHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        OpenInstancePublicPortsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type OpenInstancePublicPortsRequest struct {
	Headers OpenInstancePublicPortsHeaders
	Request shared.OpenInstancePublicPortsRequest `request:"mediaType=application/json"`
}

type OpenInstancePublicPortsResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OpenInstancePublicPortsResult   *shared.OpenInstancePublicPortsResult
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
