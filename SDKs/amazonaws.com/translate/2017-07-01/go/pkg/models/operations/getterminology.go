package operations

import (
	"openapi/pkg/models/shared"
)

type GetTerminologyXAmzTargetEnum string

const (
	GetTerminologyXAmzTargetEnumAwsShineFrontendService20170701GetTerminology GetTerminologyXAmzTargetEnum = "AWSShineFrontendService_20170701.GetTerminology"
)

type GetTerminologyHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetTerminologyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetTerminologyRequest struct {
	Headers GetTerminologyHeaders
	Request shared.GetTerminologyRequest `request:"mediaType=application/json"`
}

type GetTerminologyResponse struct {
	ContentType                    string
	GetTerminologyResponse         *shared.GetTerminologyResponse
	InternalServerException        *interface{}
	InvalidParameterValueException *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
