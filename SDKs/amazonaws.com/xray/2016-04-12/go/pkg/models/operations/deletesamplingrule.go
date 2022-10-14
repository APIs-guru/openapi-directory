package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSamplingRuleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteSamplingRuleRequestBody struct {
	RuleArn  *string `json:"RuleARN,omitempty"`
	RuleName *string `json:"RuleName,omitempty"`
}

type DeleteSamplingRuleRequest struct {
	Headers DeleteSamplingRuleHeaders
	Request DeleteSamplingRuleRequestBody `request:"mediaType=application/json"`
}

type DeleteSamplingRuleResponse struct {
	ContentType              string
	DeleteSamplingRuleResult *shared.DeleteSamplingRuleResult
	InvalidRequestException  *interface{}
	StatusCode               int64
	ThrottledException       *interface{}
}
