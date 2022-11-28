package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSamplingRuleHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateSamplingRuleRequestBodySamplingRule
// A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties.
type CreateSamplingRuleRequestBodySamplingRule struct {
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
	Version       *int64            `json:"Version,omitempty"`
}

type CreateSamplingRuleRequestBody struct {
	SamplingRule CreateSamplingRuleRequestBodySamplingRule `json:"SamplingRule"`
	Tags         []shared.Tag                              `json:"Tags,omitempty"`
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
