package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTerminologyXAmzTargetEnum string

const (
	DeleteTerminologyXAmzTargetEnumAwsShineFrontendService20170701DeleteTerminology DeleteTerminologyXAmzTargetEnum = "AWSShineFrontendService_20170701.DeleteTerminology"
)

type DeleteTerminologyHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteTerminologyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteTerminologyRequest struct {
	Headers DeleteTerminologyHeaders
	Request shared.DeleteTerminologyRequest `request:"mediaType=application/json"`
}

type DeleteTerminologyResponse struct {
	ContentType                    string
	InternalServerException        *interface{}
	InvalidParameterValueException *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
