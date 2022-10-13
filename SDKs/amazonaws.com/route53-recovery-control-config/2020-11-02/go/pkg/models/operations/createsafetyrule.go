package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSafetyRuleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateSafetyRuleRequestBodyAssertionRule struct {
	AssertedControls []string           `json:"AssertedControls"`
	ControlPanelArn  *string            `json:"ControlPanelArn"`
	Name             *string            `json:"Name"`
	RuleConfig       *shared.RuleConfig `json:"RuleConfig"`
	WaitPeriodMs     *int64             `json:"WaitPeriodMs"`
}

type CreateSafetyRuleRequestBodyGatingRule struct {
	ControlPanelArn *string            `json:"ControlPanelArn"`
	GatingControls  []string           `json:"GatingControls"`
	Name            *string            `json:"Name"`
	RuleConfig      *shared.RuleConfig `json:"RuleConfig"`
	TargetControls  []string           `json:"TargetControls"`
	WaitPeriodMs    *int64             `json:"WaitPeriodMs"`
}

type CreateSafetyRuleRequestBody struct {
	AssertionRule *CreateSafetyRuleRequestBodyAssertionRule `json:"AssertionRule"`
	ClientToken   *string                                   `json:"ClientToken"`
	GatingRule    *CreateSafetyRuleRequestBodyGatingRule    `json:"GatingRule"`
}

type CreateSafetyRuleRequest struct {
	Headers CreateSafetyRuleHeaders
	Request CreateSafetyRuleRequestBody `request:"mediaType=application/json"`
}

type CreateSafetyRuleResponse struct {
	ContentType              string
	CreateSafetyRuleResponse *shared.CreateSafetyRuleResponse
	InternalServerException  *interface{}
	StatusCode               int64
	ValidationException      *interface{}
}
