package operations

import (
	"openapi/pkg/models/shared"
)

type RestoreServerXAmzTargetEnum string

const (
	RestoreServerXAmzTargetEnumOpsWorksCmV20161101RestoreServer RestoreServerXAmzTargetEnum = "OpsWorksCM_V2016_11_01.RestoreServer"
)

type RestoreServerHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RestoreServerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RestoreServerRequest struct {
	Headers RestoreServerHeaders
	Request shared.RestoreServerRequest `request:"mediaType=application/json"`
}

type RestoreServerResponse struct {
	ContentType               string
	InvalidStateException     *interface{}
	ResourceNotFoundException *interface{}
	RestoreServerResponse     *shared.RestoreServerResponse
	StatusCode                int64
	ValidationException       *interface{}
}
