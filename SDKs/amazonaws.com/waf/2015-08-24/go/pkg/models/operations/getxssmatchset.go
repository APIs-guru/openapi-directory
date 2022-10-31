package operations

import (
	"openapi/pkg/models/shared"
)

type GetXSSMatchSetXAmzTargetEnum string

const (
	GetXSSMatchSetXAmzTargetEnumAwswaf20150824GetXSSMatchSet GetXSSMatchSetXAmzTargetEnum = "AWSWAF_20150824.GetXssMatchSet"
)

type GetXSSMatchSetHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetXSSMatchSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetXSSMatchSetRequest struct {
	Headers GetXSSMatchSetHeaders
	Request shared.GetXSSMatchSetRequest `request:"mediaType=application/json"`
}

type GetXSSMatchSetResponse struct {
	ContentType                 string
	GetXSSMatchSetResponse      *shared.GetXSSMatchSetResponse
	StatusCode                  int64
	WafInternalErrorException   *interface{}
	WafInvalidAccountException  *interface{}
	WafNonexistentItemException *interface{}
}
