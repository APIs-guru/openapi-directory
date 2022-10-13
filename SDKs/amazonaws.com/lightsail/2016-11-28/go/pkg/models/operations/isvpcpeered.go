package operations

import (
	"openapi/pkg/models/shared"
)

type IsVpcPeeredXAmzTargetEnum string

const (
	IsVpcPeeredXAmzTargetEnumLightsail20161128IsVpcPeered IsVpcPeeredXAmzTargetEnum = "Lightsail_20161128.IsVpcPeered"
)

type IsVpcPeeredHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        IsVpcPeeredXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type IsVpcPeeredRequest struct {
	Headers IsVpcPeeredHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type IsVpcPeeredResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	InvalidInputException           *interface{}
	IsVpcPeeredResult               *shared.IsVpcPeeredResult
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
