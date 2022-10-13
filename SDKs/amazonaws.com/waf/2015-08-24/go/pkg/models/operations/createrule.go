package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRuleXAmzTargetEnum string

const (
	CreateRuleXAmzTargetEnumAwswaf20150824CreateRule CreateRuleXAmzTargetEnum = "AWSWAF_20150824.CreateRule"
)

type CreateRuleHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateRuleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateRuleRequest struct {
	Headers CreateRuleHeaders
	Request shared.CreateRuleRequest `request:"mediaType=application/json"`
}

type CreateRuleResponse struct {
	ContentType                           string
	CreateRuleResponse                    *shared.CreateRuleResponse
	StatusCode                            int64
	WafBadRequestException                *interface{}
	WafDisallowedNameException            *interface{}
	WafInternalErrorException             *interface{}
	WafInvalidParameterException          *interface{}
	WafLimitsExceededException            *interface{}
	WafStaleDataException                 *interface{}
	WafTagOperationException              *interface{}
	WafTagOperationInternalErrorException *interface{}
}
