package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSQLInjectionMatchSetXAmzTargetEnum string

const (
	UpdateSQLInjectionMatchSetXAmzTargetEnumAwswafRegional20161128UpdateSQLInjectionMatchSet UpdateSQLInjectionMatchSetXAmzTargetEnum = "AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet"
)

type UpdateSQLInjectionMatchSetHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateSQLInjectionMatchSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateSQLInjectionMatchSetRequest struct {
	Headers UpdateSQLInjectionMatchSetHeaders
	Request shared.UpdateSQLInjectionMatchSetRequest `request:"mediaType=application/json"`
}

type UpdateSQLInjectionMatchSetResponse struct {
	ContentType                        string
	StatusCode                         int64
	UpdateSQLInjectionMatchSetResponse *shared.UpdateSQLInjectionMatchSetResponse
	WafInternalErrorException          *interface{}
	WafInvalidAccountException         *interface{}
	WafInvalidOperationException       *interface{}
	WafInvalidParameterException       *interface{}
	WafLimitsExceededException         *interface{}
	WafNonexistentContainerException   *interface{}
	WafNonexistentItemException        *interface{}
	WafStaleDataException              *interface{}
}
