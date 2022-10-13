package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEventTrackerXAmzTargetEnum string

const (
	CreateEventTrackerXAmzTargetEnumAmazonPersonalizeCreateEventTracker CreateEventTrackerXAmzTargetEnum = "AmazonPersonalize.CreateEventTracker"
)

type CreateEventTrackerHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateEventTrackerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateEventTrackerRequest struct {
	Headers CreateEventTrackerHeaders
	Request shared.CreateEventTrackerRequest `request:"mediaType=application/json"`
}

type CreateEventTrackerResponse struct {
	ContentType                    string
	CreateEventTrackerResponse     *shared.CreateEventTrackerResponse
	InvalidInputException          *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceInUseException         *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
}
