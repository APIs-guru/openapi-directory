package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSamplingRuleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateSamplingRuleRequestBodySamplingRule struct {
	Attributes    map[string]string `json:"Attributes"`
	FixedRate     *float64          `json:"FixedRate"`
	HTTPMethod    *string           `json:"HTTPMethod"`
	Host          *string           `json:"Host"`
	Priority      *int64            `json:"Priority"`
	ReservoirSize *int64            `json:"ReservoirSize"`
	ResourceArn   *string           `json:"ResourceARN"`
	RuleArn       *string           `json:"RuleARN"`
	RuleName      *string           `json:"RuleName"`
	ServiceName   *string           `json:"ServiceName"`
	ServiceType   *string           `json:"ServiceType"`
	URLPath       *string           `json:"URLPath"`
	Version       *int64            `json:"Version"`
}

type CreateSamplingRuleRequestBody struct {
	SamplingRule CreateSamplingRuleRequestBodySamplingRule `json:"SamplingRule"`
	Tags         []shared.Tag                              `json:"Tags"`
}

type CreateSamplingRuleRequest struct {
	Headers CreateSamplingRuleHeaders
	Request CreateSamplingRuleRequestBody `request:"mediaType=application/json"`
}

type CreateSamplingRuleResponse struct {
	ContentType                string
	CreateSamplingRuleResult   *shared.CreateSamplingRuleResult
	InvalidRequestException    *interface{}
	RuleLimitExceededException *interface{}
	StatusCode                 int64
	ThrottledException         *interface{}
}
