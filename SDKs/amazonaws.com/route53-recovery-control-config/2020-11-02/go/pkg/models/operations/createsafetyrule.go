package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSafetyRuleHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateSafetyRuleRequestBodyAssertionRule struct {
	AssertedControls []string           `json:"AssertedControls,omitempty"`
	ControlPanelArn  *string            `json:"ControlPanelArn,omitempty"`
	Name             *string            `json:"Name,omitempty"`
	RuleConfig       *shared.RuleConfig `json:"RuleConfig,omitempty"`
	WaitPeriodMs     *int64             `json:"WaitPeriodMs,omitempty"`
}

type CreateSafetyRuleRequestBodyGatingRule struct {
	ControlPanelArn *string            `json:"ControlPanelArn,omitempty"`
	GatingControls  []string           `json:"GatingControls,omitempty"`
	Name            *string            `json:"Name,omitempty"`
	RuleConfig      *shared.RuleConfig `json:"RuleConfig,omitempty"`
	TargetControls  []string           `json:"TargetControls,omitempty"`
	WaitPeriodMs    *int64             `json:"WaitPeriodMs,omitempty"`
}

type CreateSafetyRuleRequestBody struct {
	AssertionRule *CreateSafetyRuleRequestBodyAssertionRule `json:"AssertionRule,omitempty"`
	ClientToken   *string                                   `json:"ClientToken,omitempty"`
	GatingRule    *CreateSafetyRuleRequestBodyGatingRule    `json:"GatingRule,omitempty"`
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
