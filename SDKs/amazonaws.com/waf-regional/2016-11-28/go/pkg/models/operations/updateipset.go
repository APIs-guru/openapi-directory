package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateIPSetXAmzTargetEnum string

const (
	UpdateIPSetXAmzTargetEnumAwswafRegional20161128UpdateIPSet UpdateIPSetXAmzTargetEnum = "AWSWAF_Regional_20161128.UpdateIPSet"
)

type UpdateIPSetHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateIPSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
