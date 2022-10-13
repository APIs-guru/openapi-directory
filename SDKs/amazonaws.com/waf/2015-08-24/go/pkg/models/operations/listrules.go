package operations

import (
	"openapi/pkg/models/shared"
)

type ListRulesXAmzTargetEnum string

const (
	ListRulesXAmzTargetEnumAwswaf20150824ListRules ListRulesXAmzTargetEnum = "AWSWAF_20150824.ListRules"
)

type ListRulesHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListRulesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListRulesRequest struct {
	Headers ListRulesHeaders
	Request shared.ListRulesRequest `request:"mediaType=application/json"`
}

type ListRulesResponse struct {
	ContentType                string
	ListRulesResponse          *shared.ListRulesResponse
	StatusCode                 int64
	WafInternalErrorException  *interface{}
	WafInvalidAccountException *interface{}
}
