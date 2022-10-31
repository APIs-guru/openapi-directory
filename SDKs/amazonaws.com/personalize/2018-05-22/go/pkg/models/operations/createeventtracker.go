package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEventTrackerXAmzTargetEnum string

const (
	CreateEventTrackerXAmzTargetEnumAmazonPersonalizeCreateEventTracker CreateEventTrackerXAmzTargetEnum = "AmazonPersonalize.CreateEventTracker"
)

type CreateEventTrackerHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateEventTrackerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
