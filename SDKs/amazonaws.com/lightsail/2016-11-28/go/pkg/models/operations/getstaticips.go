package operations

import (
	"openapi/pkg/models/shared"
)

type GetStaticIpsXAmzTargetEnum string

const (
	GetStaticIpsXAmzTargetEnumLightsail20161128GetStaticIps GetStaticIpsXAmzTargetEnum = "Lightsail_20161128.GetStaticIps"
)

type GetStaticIpsHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetStaticIpsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetStaticIpsRequest struct {
	Headers GetStaticIpsHeaders
	Request shared.GetStaticIpsRequest `request:"mediaType=application/json"`
}

type GetStaticIpsResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	GetStaticIpsResult              *shared.GetStaticIpsResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
