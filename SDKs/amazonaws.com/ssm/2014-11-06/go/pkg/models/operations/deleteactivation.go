package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteActivationXAmzTargetEnum string

const (
	DeleteActivationXAmzTargetEnumAmazonSsmDeleteActivation DeleteActivationXAmzTargetEnum = "AmazonSSM.DeleteActivation"
)

type DeleteActivationHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteActivationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteActivationRequest struct {
	Headers DeleteActivationHeaders
	Request shared.DeleteActivationRequest `request:"mediaType=application/json"`
}

type DeleteActivationResponse struct {
	ContentType            string
	DeleteActivationResult map[string]interface{}
	InternalServerError    *interface{}
	InvalidActivation      *interface{}
	InvalidActivationID    *interface{}
	StatusCode             int64
	TooManyUpdates         *interface{}
}
