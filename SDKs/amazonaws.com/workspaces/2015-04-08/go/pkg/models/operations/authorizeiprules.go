package operations

import (
	"openapi/pkg/models/shared"
)

type AuthorizeIPRulesXAmzTargetEnum string

const (
	AuthorizeIPRulesXAmzTargetEnumWorkspacesServiceAuthorizeIPRules AuthorizeIPRulesXAmzTargetEnum = "WorkspacesService.AuthorizeIpRules"
)

type AuthorizeIPRulesHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AuthorizeIPRulesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
