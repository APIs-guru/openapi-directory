package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRuleGroupXAmzTargetEnum string

const (
	CreateRuleGroupXAmzTargetEnumAwswafRegional20161128CreateRuleGroup CreateRuleGroupXAmzTargetEnum = "AWSWAF_Regional_20161128.CreateRuleGroup"
)

type CreateRuleGroupHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateRuleGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateRuleGroupRequest struct {
	Headers CreateRuleGroupHeaders
	Request shared.CreateRuleGroupRequest `request:"mediaType=application/json"`
}

type CreateRuleGroupResponse struct {
	ContentType                           string
	CreateRuleGroupResponse               *shared.CreateRuleGroupResponse
	StatusCode                            int64
	WafBadRequestException                *interface{}
	WafDisallowedNameException            *interface{}
	WafInternalErrorException             *interface{}
	WafLimitsExceededException            *interface{}
	WafStaleDataException                 *interface{}
	WafTagOperationException              *interface{}
	WafTagOperationInternalErrorException *interface{}
}
