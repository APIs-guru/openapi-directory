package operations

import (
	"openapi/pkg/models/shared"
)

type IsVpcPeeredXAmzTargetEnum string

const (
	IsVpcPeeredXAmzTargetEnumLightsail20161128IsVpcPeered IsVpcPeeredXAmzTargetEnum = "Lightsail_20161128.IsVpcPeered"
)

type IsVpcPeeredHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        IsVpcPeeredXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
