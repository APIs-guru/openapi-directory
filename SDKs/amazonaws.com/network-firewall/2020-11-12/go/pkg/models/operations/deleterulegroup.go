package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRuleGroupXAmzTargetEnum string

const (
	DeleteRuleGroupXAmzTargetEnumNetworkFirewall20201112DeleteRuleGroup DeleteRuleGroupXAmzTargetEnum = "NetworkFirewall_20201112.DeleteRuleGroup"
)

type DeleteRuleGroupHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteRuleGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteRuleGroupRequest struct {
	Headers DeleteRuleGroupHeaders
	Request shared.DeleteRuleGroupRequest `request:"mediaType=application/json"`
}

type DeleteRuleGroupResponse struct {
	ContentType                   string
	DeleteRuleGroupResponse       *shared.DeleteRuleGroupResponse
	InternalServerError           *interface{}
	InvalidOperationException     *interface{}
	InvalidRequestException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UnsupportedOperationException *interface{}
}
