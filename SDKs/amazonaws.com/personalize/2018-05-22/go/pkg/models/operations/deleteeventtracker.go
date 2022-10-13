package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEventTrackerXAmzTargetEnum string

const (
	DeleteEventTrackerXAmzTargetEnumAmazonPersonalizeDeleteEventTracker DeleteEventTrackerXAmzTargetEnum = "AmazonPersonalize.DeleteEventTracker"
)

type DeleteEventTrackerHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteEventTrackerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteEventTrackerRequest struct {
	Headers DeleteEventTrackerHeaders
	Request shared.DeleteEventTrackerRequest `request:"mediaType=application/json"`
}

type DeleteEventTrackerResponse struct {
	ContentType               string
	InvalidInputException     *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
