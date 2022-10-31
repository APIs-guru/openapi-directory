package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateResolverRuleXAmzTargetEnum string

const (
	AssociateResolverRuleXAmzTargetEnumRoute53ResolverAssociateResolverRule AssociateResolverRuleXAmzTargetEnum = "Route53Resolver.AssociateResolverRule"
)

type AssociateResolverRuleHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateResolverRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AssociateResolverRuleRequest struct {
	Headers AssociateResolverRuleHeaders
	Request shared.AssociateResolverRuleRequest `request:"mediaType=application/json"`
}

type AssociateResolverRuleResponse struct {
	AssociateResolverRuleResponse *shared.AssociateResolverRuleResponse
	ContentType                   string
	InternalServiceErrorException *interface{}
	InvalidParameterException     *interface{}
	InvalidRequestException       *interface{}
	LimitExceededException        *interface{}
	ResourceExistsException       *interface{}
	ResourceNotFoundException     *interface{}
	ResourceUnavailableException  *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
}
