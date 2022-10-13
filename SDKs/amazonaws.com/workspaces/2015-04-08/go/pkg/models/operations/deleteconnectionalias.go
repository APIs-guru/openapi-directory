package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteConnectionAliasXAmzTargetEnum string

const (
	DeleteConnectionAliasXAmzTargetEnumWorkspacesServiceDeleteConnectionAlias DeleteConnectionAliasXAmzTargetEnum = "WorkspacesService.DeleteConnectionAlias"
)

type DeleteConnectionAliasHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteConnectionAliasXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteConnectionAliasRequest struct {
	Headers DeleteConnectionAliasHeaders
	Request shared.DeleteConnectionAliasRequest `request:"mediaType=application/json"`
}

type DeleteConnectionAliasResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	DeleteConnectionAliasResult     map[string]interface{}
	InvalidParameterValuesException *interface{}
	InvalidResourceStateException   *interface{}
	OperationNotSupportedException  *interface{}
	ResourceAssociatedException     *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
