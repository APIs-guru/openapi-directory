package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeRuleGroupXAmzTargetEnum string

const (
	DescribeRuleGroupXAmzTargetEnumNetworkFirewall20201112DescribeRuleGroup DescribeRuleGroupXAmzTargetEnum = "NetworkFirewall_20201112.DescribeRuleGroup"
)

type DescribeRuleGroupHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeRuleGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeRuleGroupRequest struct {
	Headers DescribeRuleGroupHeaders
	Request shared.DescribeRuleGroupRequest `request:"mediaType=application/json"`
}

type DescribeRuleGroupResponse struct {
	ContentType               string
	DescribeRuleGroupResponse *shared.DescribeRuleGroupResponse
	InternalServerError       *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
