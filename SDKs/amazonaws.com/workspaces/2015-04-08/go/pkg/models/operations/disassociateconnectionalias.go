package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateConnectionAliasXAmzTargetEnum string

const (
	DisassociateConnectionAliasXAmzTargetEnumWorkspacesServiceDisassociateConnectionAlias DisassociateConnectionAliasXAmzTargetEnum = "WorkspacesService.DisassociateConnectionAlias"
)

type DisassociateConnectionAliasHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateConnectionAliasXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisassociateConnectionAliasRequest struct {
	Headers DisassociateConnectionAliasHeaders
	Request shared.DisassociateConnectionAliasRequest `request:"mediaType=application/json"`
}

type DisassociateConnectionAliasResponse struct {
	AccessDeniedException             *interface{}
	ContentType                       string
	DisassociateConnectionAliasResult map[string]interface{}
	InvalidParameterValuesException   *interface{}
	InvalidResourceStateException     *interface{}
	OperationNotSupportedException    *interface{}
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
}
