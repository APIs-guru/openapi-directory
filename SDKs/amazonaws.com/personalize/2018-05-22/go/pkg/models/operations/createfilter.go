package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFilterXAmzTargetEnum string

const (
	CreateFilterXAmzTargetEnumAmazonPersonalizeCreateFilter CreateFilterXAmzTargetEnum = "AmazonPersonalize.CreateFilter"
)

type CreateFilterHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateFilterXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
