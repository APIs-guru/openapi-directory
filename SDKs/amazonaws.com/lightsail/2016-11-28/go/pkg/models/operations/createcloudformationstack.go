package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCloudFormationStackXAmzTargetEnum string

const (
	CreateCloudFormationStackXAmzTargetEnumLightsail20161128CreateCloudFormationStack CreateCloudFormationStackXAmzTargetEnum = "Lightsail_20161128.CreateCloudFormationStack"
)

type CreateCloudFormationStackHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateCloudFormationStackXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateCloudFormationStackRequest struct {
	Headers CreateCloudFormationStackHeaders
	Request shared.CreateCloudFormationStackRequest `request:"mediaType=application/json"`
}

type CreateCloudFormationStackResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	CreateCloudFormationStackResult *shared.CreateCloudFormationStackResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
