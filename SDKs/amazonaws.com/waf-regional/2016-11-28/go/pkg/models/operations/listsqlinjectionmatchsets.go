package operations

import (
	"openapi/pkg/models/shared"
)

type ListSQLInjectionMatchSetsXAmzTargetEnum string

const (
	ListSQLInjectionMatchSetsXAmzTargetEnumAwswafRegional20161128ListSQLInjectionMatchSets ListSQLInjectionMatchSetsXAmzTargetEnum = "AWSWAF_Regional_20161128.ListSqlInjectionMatchSets"
)

type ListSQLInjectionMatchSetsHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListSQLInjectionMatchSetsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
