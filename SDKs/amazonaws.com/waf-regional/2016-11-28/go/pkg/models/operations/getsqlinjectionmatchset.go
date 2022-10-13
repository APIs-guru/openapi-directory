package operations

import (
	"openapi/pkg/models/shared"
)

type GetSQLInjectionMatchSetXAmzTargetEnum string

const (
	GetSQLInjectionMatchSetXAmzTargetEnumAwswafRegional20161128GetSQLInjectionMatchSet GetSQLInjectionMatchSetXAmzTargetEnum = "AWSWAF_Regional_20161128.GetSqlInjectionMatchSet"
)

type GetSQLInjectionMatchSetHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSQLInjectionMatchSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetSQLInjectionMatchSetRequest struct {
	Headers GetSQLInjectionMatchSetHeaders
	Request shared.GetSQLInjectionMatchSetRequest `request:"mediaType=application/json"`
}

type GetSQLInjectionMatchSetResponse struct {
	ContentType                     string
	GetSQLInjectionMatchSetResponse *shared.GetSQLInjectionMatchSetResponse
	StatusCode                      int64
	WafInternalErrorException       *interface{}
	WafInvalidAccountException      *interface{}
	WafNonexistentItemException     *interface{}
}
