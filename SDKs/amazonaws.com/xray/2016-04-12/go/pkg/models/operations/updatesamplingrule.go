package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSamplingRuleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateSamplingRuleRequestBodySamplingRuleUpdate struct {
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
}

type UpdateSamplingRuleRequestBody struct {
	SamplingRuleUpdate UpdateSamplingRuleRequestBodySamplingRuleUpdate `json:"SamplingRuleUpdate"`
}

type UpdateSamplingRuleRequest struct {
	Headers UpdateSamplingRuleHeaders
	Request UpdateSamplingRuleRequestBody `request:"mediaType=application/json"`
}

type UpdateSamplingRuleResponse struct {
	ContentType              string
	InvalidRequestException  *interface{}
	StatusCode               int64
	ThrottledException       *interface{}
	UpdateSamplingRuleResult *shared.UpdateSamplingRuleResult
}
