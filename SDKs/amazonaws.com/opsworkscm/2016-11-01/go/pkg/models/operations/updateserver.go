package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateServerXAmzTargetEnum string

const (
	UpdateServerXAmzTargetEnumOpsWorksCmV20161101UpdateServer UpdateServerXAmzTargetEnum = "OpsWorksCM_V2016_11_01.UpdateServer"
)

type UpdateServerHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateServerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateServerRequest struct {
	Headers UpdateServerHeaders
	Request shared.UpdateServerRequest `request:"mediaType=application/json"`
}

type UpdateServerResponse struct {
	ContentType               string
	InvalidStateException     *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	UpdateServerResponse      *shared.UpdateServerResponse
	ValidationException       *interface{}
}
