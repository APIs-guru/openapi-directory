package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateServerEngineAttributesXAmzTargetEnum string

const (
	UpdateServerEngineAttributesXAmzTargetEnumOpsWorksCmV20161101UpdateServerEngineAttributes UpdateServerEngineAttributesXAmzTargetEnum = "OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes"
)

type UpdateServerEngineAttributesHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateServerEngineAttributesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateServerEngineAttributesRequest struct {
	Headers UpdateServerEngineAttributesHeaders
	Request shared.UpdateServerEngineAttributesRequest `request:"mediaType=application/json"`
}

type UpdateServerEngineAttributesResponse struct {
	ContentType                          string
	InvalidStateException                *interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
	UpdateServerEngineAttributesResponse *shared.UpdateServerEngineAttributesResponse
	ValidationException                  *interface{}
}
