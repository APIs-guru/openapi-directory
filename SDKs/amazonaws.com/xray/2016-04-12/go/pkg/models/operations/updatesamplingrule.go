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
	Attributes    map[string]string `json:"Attributes,omitempty"`
	FixedRate     *float64          `json:"FixedRate,omitempty"`
	HTTPMethod    *string           `json:"HTTPMethod,omitempty"`
	Host          *string           `json:"Host,omitempty"`
	Priority      *int64            `json:"Priority,omitempty"`
	ReservoirSize *int64            `json:"ReservoirSize,omitempty"`
	ResourceArn   *string           `json:"ResourceARN,omitempty"`
	RuleArn       *string           `json:"RuleARN,omitempty"`
	RuleName      *string           `json:"RuleName,omitempty"`
	ServiceName   *string           `json:"ServiceName,omitempty"`
	ServiceType   *string           `json:"ServiceType,omitempty"`
	URLPath       *string           `json:"URLPath,omitempty"`
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
