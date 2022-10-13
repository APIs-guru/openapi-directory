package operations

import (
	"openapi/pkg/models/shared"
)

type ImportTerminologyXAmzTargetEnum string

const (
	ImportTerminologyXAmzTargetEnumAwsShineFrontendService20170701ImportTerminology ImportTerminologyXAmzTargetEnum = "AWSShineFrontendService_20170701.ImportTerminology"
)

type ImportTerminologyHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ImportTerminologyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ImportTerminologyRequest struct {
	Headers ImportTerminologyHeaders
	Request shared.ImportTerminologyRequest `request:"mediaType=application/json"`
}

type ImportTerminologyResponse struct {
	ContentType                    string
	ImportTerminologyResponse      *shared.ImportTerminologyResponse
	InternalServerException        *interface{}
	InvalidParameterValueException *interface{}
	LimitExceededException         *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
