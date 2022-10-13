package operations

type DeleteSafetyRulePathParams struct {
	SafetyRuleArn string `pathParam:"style=simple,explode=false,name=SafetyRuleArn"`
}

type DeleteSafetyRuleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteSafetyRuleRequest struct {
	PathParams DeleteSafetyRulePathParams
	Headers    DeleteSafetyRuleHeaders
}

type DeleteSafetyRuleResponse struct {
	ContentType               string
	DeleteSafetyRuleResponse  map[string]interface{}
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
