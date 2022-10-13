package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateConnectionAliasXAmzTargetEnum string

const (
	AssociateConnectionAliasXAmzTargetEnumWorkspacesServiceAssociateConnectionAlias AssociateConnectionAliasXAmzTargetEnum = "WorkspacesService.AssociateConnectionAlias"
)

type AssociateConnectionAliasHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateConnectionAliasXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssociateConnectionAliasRequest struct {
	Headers AssociateConnectionAliasHeaders
	Request shared.AssociateConnectionAliasRequest `request:"mediaType=application/json"`
}

type AssociateConnectionAliasResponse struct {
	AccessDeniedException           *interface{}
	AssociateConnectionAliasResult  *shared.AssociateConnectionAliasResult
	ContentType                     string
	InvalidParameterValuesException *interface{}
	InvalidResourceStateException   *interface{}
	OperationNotSupportedException  *interface{}
	ResourceAssociatedException     *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
