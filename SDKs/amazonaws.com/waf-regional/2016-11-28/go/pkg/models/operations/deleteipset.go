package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteIPSetXAmzTargetEnum string

const (
	DeleteIPSetXAmzTargetEnumAwswafRegional20161128DeleteIPSet DeleteIPSetXAmzTargetEnum = "AWSWAF_Regional_20161128.DeleteIPSet"
)

type DeleteIPSetHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteIPSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
