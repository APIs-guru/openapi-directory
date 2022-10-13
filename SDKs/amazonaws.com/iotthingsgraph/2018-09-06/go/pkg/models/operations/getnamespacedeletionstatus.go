package operations

import (
	"openapi/pkg/models/shared"
)

type GetNamespaceDeletionStatusXAmzTargetEnum string

const (
	GetNamespaceDeletionStatusXAmzTargetEnumIotThingsGraphFrontEndServiceGetNamespaceDeletionStatus GetNamespaceDeletionStatusXAmzTargetEnum = "IotThingsGraphFrontEndService.GetNamespaceDeletionStatus"
)

type GetNamespaceDeletionStatusHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetNamespaceDeletionStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetNamespaceDeletionStatusRequest struct {
	Headers GetNamespaceDeletionStatusHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type GetNamespaceDeletionStatusResponse struct {
	ContentType                        string
	GetNamespaceDeletionStatusResponse *shared.GetNamespaceDeletionStatusResponse
	InternalFailureException           *interface{}
	InvalidRequestException            *interface{}
	StatusCode                         int64
	ThrottlingException                *interface{}
}
