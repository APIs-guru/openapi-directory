package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDiskXAmzTargetEnum string

const (
	DeleteDiskXAmzTargetEnumLightsail20161128DeleteDisk DeleteDiskXAmzTargetEnum = "Lightsail_20161128.DeleteDisk"
)

type DeleteDiskHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteDiskXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteDiskRequest struct {
	Headers DeleteDiskHeaders
	Request shared.DeleteDiskRequest `request:"mediaType=application/json"`
}

type DeleteDiskResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	DeleteDiskResult                *shared.DeleteDiskResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
