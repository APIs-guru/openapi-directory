package operations

import (
	"openapi/pkg/models/shared"
)

type UnpeerVpcXAmzTargetEnum string

const (
	UnpeerVpcXAmzTargetEnumLightsail20161128UnpeerVpc UnpeerVpcXAmzTargetEnum = "Lightsail_20161128.UnpeerVpc"
)

type UnpeerVpcHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UnpeerVpcXAmzTargetEnum `header:"name=X-Amz-Target"`
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
