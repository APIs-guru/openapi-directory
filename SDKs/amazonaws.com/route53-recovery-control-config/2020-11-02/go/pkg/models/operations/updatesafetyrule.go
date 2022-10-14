package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSafetyRuleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateSafetyRuleRequestBodyAssertionRuleUpdate struct {
	Name          *string `json:"Name,omitempty"`
	SafetyRuleArn *string `json:"SafetyRuleArn,omitempty"`
	WaitPeriodMs  *int64  `json:"WaitPeriodMs,omitempty"`
}

type UpdateSafetyRuleRequestBodyGatingRuleUpdate struct {
	Name          *string `json:"Name,omitempty"`
	SafetyRuleArn *string `json:"SafetyRuleArn,omitempty"`
	WaitPeriodMs  *int64  `json:"WaitPeriodMs,omitempty"`
}

type UpdateSafetyRuleRequestBody struct {
	AssertionRuleUpdate *UpdateSafetyRuleRequestBodyAssertionRuleUpdate `json:"AssertionRuleUpdate,omitempty"`
	GatingRuleUpdate    *UpdateSafetyRuleRequestBodyGatingRuleUpdate    `json:"GatingRuleUpdate,omitempty"`
}

type UpdateSafetyRuleRequest struct {
	Headers UpdateSafetyRuleHeaders
	Request UpdateSafetyRuleRequestBody `request:"mediaType=application/json"`
}

type UpdateSafetyRuleResponse struct {
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	UpdateSafetyRuleResponse  *shared.UpdateSafetyRuleResponse
	ValidationException       *interface{}
}
