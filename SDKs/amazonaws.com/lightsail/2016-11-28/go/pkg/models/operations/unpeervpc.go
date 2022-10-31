package operations

import (
	"openapi/pkg/models/shared"
)

type UnpeerVpcXAmzTargetEnum string

const (
	UnpeerVpcXAmzTargetEnumLightsail20161128UnpeerVpc UnpeerVpcXAmzTargetEnum = "Lightsail_20161128.UnpeerVpc"
)

type UnpeerVpcHeaders struct {
	XAmzAlgorithm     *string                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UnpeerVpcXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UnpeerVpcRequest struct {
	Headers UnpeerVpcHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type UnpeerVpcResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
	UnpeerVpcResult                 *shared.UnpeerVpcResult
}
