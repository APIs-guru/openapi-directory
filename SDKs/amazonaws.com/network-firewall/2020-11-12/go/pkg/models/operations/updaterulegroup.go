package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRuleGroupXAmzTargetEnum string

const (
	UpdateRuleGroupXAmzTargetEnumNetworkFirewall20201112UpdateRuleGroup UpdateRuleGroupXAmzTargetEnum = "NetworkFirewall_20201112.UpdateRuleGroup"
)

type UpdateRuleGroupHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateRuleGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateRuleGroupRequest struct {
	Headers UpdateRuleGroupHeaders
	Request shared.UpdateRuleGroupRequest `request:"mediaType=application/json"`
}

type UpdateRuleGroupResponse struct {
	ContentType               string
	InternalServerError       *interface{}
	InvalidRequestException   *interface{}
	InvalidTokenException     *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	UpdateRuleGroupResponse   *shared.UpdateRuleGroupResponse
}
