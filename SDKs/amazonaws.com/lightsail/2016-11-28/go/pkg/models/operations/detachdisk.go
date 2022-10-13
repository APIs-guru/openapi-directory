package operations

import (
	"openapi/pkg/models/shared"
)

type DetachDiskXAmzTargetEnum string

const (
	DetachDiskXAmzTargetEnumLightsail20161128DetachDisk DetachDiskXAmzTargetEnum = "Lightsail_20161128.DetachDisk"
)

type DetachDiskHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DetachDiskXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DetachDiskRequest struct {
	Headers DetachDiskHeaders
	Request shared.DetachDiskRequest `request:"mediaType=application/json"`
}

type DetachDiskResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	DetachDiskResult                *shared.DetachDiskResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
