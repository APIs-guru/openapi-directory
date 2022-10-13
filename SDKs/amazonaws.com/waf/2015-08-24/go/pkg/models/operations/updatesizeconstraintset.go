package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSizeConstraintSetXAmzTargetEnum string

const (
	UpdateSizeConstraintSetXAmzTargetEnumAwswaf20150824UpdateSizeConstraintSet UpdateSizeConstraintSetXAmzTargetEnum = "AWSWAF_20150824.UpdateSizeConstraintSet"
)

type UpdateSizeConstraintSetHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateSizeConstraintSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateSizeConstraintSetRequest struct {
	Headers UpdateSizeConstraintSetHeaders
	Request shared.UpdateSizeConstraintSetRequest `request:"mediaType=application/json"`
}

type UpdateSizeConstraintSetResponse struct {
	ContentType                      string
	StatusCode                       int64
	UpdateSizeConstraintSetResponse  *shared.UpdateSizeConstraintSetResponse
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
