package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSQLInjectionMatchSetXAmzTargetEnum string

const (
	CreateSQLInjectionMatchSetXAmzTargetEnumAwswaf20150824CreateSQLInjectionMatchSet CreateSQLInjectionMatchSetXAmzTargetEnum = "AWSWAF_20150824.CreateSqlInjectionMatchSet"
)

type CreateSQLInjectionMatchSetHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateSQLInjectionMatchSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateSQLInjectionMatchSetRequest struct {
	Headers CreateSQLInjectionMatchSetHeaders
	Request shared.CreateSQLInjectionMatchSetRequest `request:"mediaType=application/json"`
}

type CreateSQLInjectionMatchSetResponse struct {
	ContentType                        string
	CreateSQLInjectionMatchSetResponse *shared.CreateSQLInjectionMatchSetResponse
	StatusCode                         int64
	WafDisallowedNameException         *interface{}
	WafInternalErrorException          *interface{}
	WafInvalidAccountException         *interface{}
	WafInvalidParameterException       *interface{}
	WafLimitsExceededException         *interface{}
	WafStaleDataException              *interface{}
}
