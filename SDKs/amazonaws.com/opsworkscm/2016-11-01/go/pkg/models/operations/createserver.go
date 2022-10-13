package operations

import (
	"openapi/pkg/models/shared"
)

type CreateServerXAmzTargetEnum string

const (
	CreateServerXAmzTargetEnumOpsWorksCmV20161101CreateServer CreateServerXAmzTargetEnum = "OpsWorksCM_V2016_11_01.CreateServer"
)

type CreateServerHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateServerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateServerRequest struct {
	Headers CreateServerHeaders
	Request shared.CreateServerRequest `request:"mediaType=application/json"`
}

type CreateServerResponse struct {
	ContentType                    string
	CreateServerResponse           *shared.CreateServerResponse
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ValidationException            *interface{}
}
