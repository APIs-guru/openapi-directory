package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEventTrackerXAmzTargetEnum string

const (
	DeleteEventTrackerXAmzTargetEnumAmazonPersonalizeDeleteEventTracker DeleteEventTrackerXAmzTargetEnum = "AmazonPersonalize.DeleteEventTracker"
)

type DeleteEventTrackerHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteEventTrackerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
