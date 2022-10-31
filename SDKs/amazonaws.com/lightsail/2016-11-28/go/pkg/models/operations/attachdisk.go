package operations

import (
	"openapi/pkg/models/shared"
)

type AttachDiskXAmzTargetEnum string

const (
	AttachDiskXAmzTargetEnumLightsail20161128AttachDisk AttachDiskXAmzTargetEnum = "Lightsail_20161128.AttachDisk"
)

type AttachDiskHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AttachDiskXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AttachDiskRequest struct {
	Headers AttachDiskHeaders
	Request shared.AttachDiskRequest `request:"mediaType=application/json"`
}

type AttachDiskResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	AttachDiskResult                *shared.AttachDiskResult
	ContentType                     string
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
