package operations

import (
	"openapi/pkg/models/shared"
)

type CreateConnectionAliasXAmzTargetEnum string

const (
	CreateConnectionAliasXAmzTargetEnumWorkspacesServiceCreateConnectionAlias CreateConnectionAliasXAmzTargetEnum = "WorkspacesService.CreateConnectionAlias"
)

type CreateConnectionAliasHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateConnectionAliasXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateConnectionAliasRequest struct {
	Headers CreateConnectionAliasHeaders
	Request shared.CreateConnectionAliasRequest `request:"mediaType=application/json"`
}

type CreateConnectionAliasResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	CreateConnectionAliasResult     *shared.CreateConnectionAliasResult
	InvalidParameterValuesException *interface{}
	InvalidResourceStateException   *interface{}
	OperationNotSupportedException  *interface{}
	ResourceAlreadyExistsException  *interface{}
	ResourceLimitExceededException  *interface{}
	StatusCode                      int64
}
