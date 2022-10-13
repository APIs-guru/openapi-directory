package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateIPSetXAmzTargetEnum string

const (
	UpdateIPSetXAmzTargetEnumAwswaf20150824UpdateIPSet UpdateIPSetXAmzTargetEnum = "AWSWAF_20150824.UpdateIPSet"
)

type UpdateIPSetHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateIPSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateIPSetRequest struct {
	Headers UpdateIPSetHeaders
	Request shared.UpdateIPSetRequest `request:"mediaType=application/json"`
}

type UpdateIPSetResponse struct {
	ContentType                      string
	StatusCode                       int64
	UpdateIPSetResponse              *shared.UpdateIPSetResponse
	WafInternalErrorException        *interface{}
	WafInvalidAccountException       *interface{}
	WafInvalidOperationException     *interface{}
	WafInvalidParameterException     *interface{}
	WafLimitsExceededException       *interface{}
	WafNonexistentContainerException *interface{}
	WafNonexistentItemException      *interface{}
	WafReferencedItemException       *interface{}
	WafStaleDataException            *interface{}
}
