package operations

import (
	"openapi/pkg/models/shared"
)

type GetCloudFormationStackRecordsXAmzTargetEnum string

const (
	GetCloudFormationStackRecordsXAmzTargetEnumLightsail20161128GetCloudFormationStackRecords GetCloudFormationStackRecordsXAmzTargetEnum = "Lightsail_20161128.GetCloudFormationStackRecords"
)

type GetCloudFormationStackRecordsHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetCloudFormationStackRecordsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetCloudFormationStackRecordsRequest struct {
	Headers GetCloudFormationStackRecordsHeaders
	Request shared.GetCloudFormationStackRecordsRequest `request:"mediaType=application/json"`
}

type GetCloudFormationStackRecordsResponse struct {
	AccessDeniedException               *interface{}
	AccountSetupInProgressException     *interface{}
	ContentType                         string
	GetCloudFormationStackRecordsResult *shared.GetCloudFormationStackRecordsResult
	InvalidInputException               *interface{}
	NotFoundException                   *interface{}
	OperationFailureException           *interface{}
	ServiceException                    *interface{}
	StatusCode                          int64
	UnauthenticatedException            *interface{}
}
