package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSizeConstraintSetXAmzTargetEnum string

const (
	DeleteSizeConstraintSetXAmzTargetEnumAwswaf20150824DeleteSizeConstraintSet DeleteSizeConstraintSetXAmzTargetEnum = "AWSWAF_20150824.DeleteSizeConstraintSet"
)

type DeleteSizeConstraintSetHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteSizeConstraintSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteSizeConstraintSetRequest struct {
	Headers DeleteSizeConstraintSetHeaders
	Request shared.DeleteSizeConstraintSetRequest `request:"mediaType=application/json"`
}

type DeleteSizeConstraintSetResponse struct {
	ContentType                     string
	DeleteSizeConstraintSetResponse *shared.DeleteSizeConstraintSetResponse
	StatusCode                      int64
	WafInternalErrorException       *interface{}
	WafInvalidAccountException      *interface{}
	WafNonEmptyEntityException      *interface{}
	WafNonexistentItemException     *interface{}
	WafReferencedItemException      *interface{}
	WafStaleDataException           *interface{}
}
