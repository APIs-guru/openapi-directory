package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteIPSetXAmzTargetEnum string

const (
	DeleteIPSetXAmzTargetEnumAwswaf20150824DeleteIPSet DeleteIPSetXAmzTargetEnum = "AWSWAF_20150824.DeleteIPSet"
)

type DeleteIPSetHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteIPSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteIPSetRequest struct {
	Headers DeleteIPSetHeaders
	Request shared.DeleteIPSetRequest `request:"mediaType=application/json"`
}

type DeleteIPSetResponse struct {
	ContentType                 string
	DeleteIPSetResponse         *shared.DeleteIPSetResponse
	StatusCode                  int64
	WafInternalErrorException   *interface{}
	WafInvalidAccountException  *interface{}
	WafNonEmptyEntityException  *interface{}
	WafNonexistentItemException *interface{}
	WafReferencedItemException  *interface{}
	WafStaleDataException       *interface{}
}
