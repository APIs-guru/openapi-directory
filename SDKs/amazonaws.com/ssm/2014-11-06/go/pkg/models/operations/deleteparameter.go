package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteParameterXAmzTargetEnum string

const (
	DeleteParameterXAmzTargetEnumAmazonSsmDeleteParameter DeleteParameterXAmzTargetEnum = "AmazonSSM.DeleteParameter"
)

type DeleteParameterHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteParameterXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteParameterRequest struct {
	Headers DeleteParameterHeaders
	Request shared.DeleteParameterRequest `request:"mediaType=application/json"`
}

type DeleteParameterResponse struct {
	ContentType           string
	DeleteParameterResult map[string]interface{}
	InternalServerError   *interface{}
	ParameterNotFound     *interface{}
	StatusCode            int64
}
