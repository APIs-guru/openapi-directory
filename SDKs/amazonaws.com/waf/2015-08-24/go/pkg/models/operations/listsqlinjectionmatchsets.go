package operations

import (
	"openapi/pkg/models/shared"
)

type ListSQLInjectionMatchSetsXAmzTargetEnum string

const (
	ListSQLInjectionMatchSetsXAmzTargetEnumAwswaf20150824ListSQLInjectionMatchSets ListSQLInjectionMatchSetsXAmzTargetEnum = "AWSWAF_20150824.ListSqlInjectionMatchSets"
)

type ListSQLInjectionMatchSetsHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListSQLInjectionMatchSetsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListSQLInjectionMatchSetsRequest struct {
	Headers ListSQLInjectionMatchSetsHeaders
	Request shared.ListSQLInjectionMatchSetsRequest `request:"mediaType=application/json"`
}

type ListSQLInjectionMatchSetsResponse struct {
	ContentType                       string
	ListSQLInjectionMatchSetsResponse *shared.ListSQLInjectionMatchSetsResponse
	StatusCode                        int64
	WafInternalErrorException         *interface{}
	WafInvalidAccountException        *interface{}
}
