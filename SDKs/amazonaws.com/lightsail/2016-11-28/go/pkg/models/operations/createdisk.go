package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDiskXAmzTargetEnum string

const (
	CreateDiskXAmzTargetEnumLightsail20161128CreateDisk CreateDiskXAmzTargetEnum = "Lightsail_20161128.CreateDisk"
)

type CreateDiskHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDiskXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateDiskRequest struct {
	Headers CreateDiskHeaders
	Request shared.CreateDiskRequest `request:"mediaType=application/json"`
}

type CreateDiskResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	CreateDiskResult                *shared.CreateDiskResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
