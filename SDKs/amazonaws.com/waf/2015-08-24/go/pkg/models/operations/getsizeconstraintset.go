package operations

import (
	"openapi/pkg/models/shared"
)

type GetSizeConstraintSetXAmzTargetEnum string

const (
	GetSizeConstraintSetXAmzTargetEnumAwswaf20150824GetSizeConstraintSet GetSizeConstraintSetXAmzTargetEnum = "AWSWAF_20150824.GetSizeConstraintSet"
)

type GetSizeConstraintSetHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSizeConstraintSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetSizeConstraintSetRequest struct {
	Headers GetSizeConstraintSetHeaders
	Request shared.GetSizeConstraintSetRequest `request:"mediaType=application/json"`
}

type GetSizeConstraintSetResponse struct {
	ContentType                  string
	GetSizeConstraintSetResponse *shared.GetSizeConstraintSetResponse
	StatusCode                   int64
	WafInternalErrorException    *interface{}
	WafInvalidAccountException   *interface{}
	WafNonexistentItemException  *interface{}
}
