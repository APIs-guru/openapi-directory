package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSafetyRulePathParams struct {
	SafetyRuleArn string `pathParam:"style=simple,explode=false,name=SafetyRuleArn"`
}

type DescribeSafetyRuleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeSafetyRuleRequest struct {
	PathParams DescribeSafetyRulePathParams
	Headers    DescribeSafetyRuleHeaders
}

type DescribeSafetyRuleResponse struct {
	ContentType                string
	DescribeSafetyRuleResponse *shared.DescribeSafetyRuleResponse
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ValidationException        *interface{}
}
