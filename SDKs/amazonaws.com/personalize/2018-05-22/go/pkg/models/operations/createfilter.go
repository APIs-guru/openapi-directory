package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFilterXAmzTargetEnum string

const (
	CreateFilterXAmzTargetEnumAmazonPersonalizeCreateFilter CreateFilterXAmzTargetEnum = "AmazonPersonalize.CreateFilter"
)

type CreateFilterHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateFilterXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateFilterRequest struct {
	Headers CreateFilterHeaders
	Request shared.CreateFilterRequest `request:"mediaType=application/json"`
}

type CreateFilterResponse struct {
	ContentType                    string
	CreateFilterResponse           *shared.CreateFilterResponse
	InvalidInputException          *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
}
