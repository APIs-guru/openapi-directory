package operations

import (
	"openapi/pkg/models/shared"
)

type AuthorizeIPRulesXAmzTargetEnum string

const (
	AuthorizeIPRulesXAmzTargetEnumWorkspacesServiceAuthorizeIPRules AuthorizeIPRulesXAmzTargetEnum = "WorkspacesService.AuthorizeIpRules"
)

type AuthorizeIPRulesHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AuthorizeIPRulesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AuthorizeIPRulesRequest struct {
	Headers AuthorizeIPRulesHeaders
	Request shared.AuthorizeIPRulesRequest `request:"mediaType=application/json"`
}

type AuthorizeIPRulesResponse struct {
	AccessDeniedException           *interface{}
	AuthorizeIPRulesResult          map[string]interface{}
	ContentType                     string
	InvalidParameterValuesException *interface{}
	InvalidResourceStateException   *interface{}
	ResourceLimitExceededException  *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
