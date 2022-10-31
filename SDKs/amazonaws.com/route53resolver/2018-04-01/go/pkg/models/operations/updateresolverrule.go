package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateResolverRuleXAmzTargetEnum string

const (
	UpdateResolverRuleXAmzTargetEnumRoute53ResolverUpdateResolverRule UpdateResolverRuleXAmzTargetEnum = "Route53Resolver.UpdateResolverRule"
)

type UpdateResolverRuleHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateResolverRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateResolverRuleRequest struct {
	Headers UpdateResolverRuleHeaders
	Request shared.UpdateResolverRuleRequest `request:"mediaType=application/json"`
}

type UpdateResolverRuleResponse struct {
	ContentType                   string
	InternalServiceErrorException *interface{}
	InvalidParameterException     *interface{}
	InvalidRequestException       *interface{}
	LimitExceededException        *interface{}
	ResourceNotFoundException     *interface{}
	ResourceUnavailableException  *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UpdateResolverRuleResponse    *shared.UpdateResolverRuleResponse
}
