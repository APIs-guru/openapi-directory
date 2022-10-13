package operations

import (
	"openapi/pkg/models/shared"
)

type GetChangeTokenStatusXAmzTargetEnum string

const (
	GetChangeTokenStatusXAmzTargetEnumAwswafRegional20161128GetChangeTokenStatus GetChangeTokenStatusXAmzTargetEnum = "AWSWAF_Regional_20161128.GetChangeTokenStatus"
)

type GetChangeTokenStatusHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetChangeTokenStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetChangeTokenStatusRequest struct {
	Headers GetChangeTokenStatusHeaders
	Request shared.GetChangeTokenStatusRequest `request:"mediaType=application/json"`
}

type GetChangeTokenStatusResponse struct {
	ContentType                  string
	GetChangeTokenStatusResponse *shared.GetChangeTokenStatusResponse
	StatusCode                   int64
	WafInternalErrorException    *interface{}
	WafNonexistentItemException  *interface{}
}
