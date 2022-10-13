package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeConnectionAliasesXAmzTargetEnum string

const (
	DescribeConnectionAliasesXAmzTargetEnumWorkspacesServiceDescribeConnectionAliases DescribeConnectionAliasesXAmzTargetEnum = "WorkspacesService.DescribeConnectionAliases"
)

type DescribeConnectionAliasesHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeConnectionAliasesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeConnectionAliasesRequest struct {
	Headers DescribeConnectionAliasesHeaders
	Request shared.DescribeConnectionAliasesRequest `request:"mediaType=application/json"`
}

type DescribeConnectionAliasesResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	DescribeConnectionAliasesResult *shared.DescribeConnectionAliasesResult
	InvalidParameterValuesException *interface{}
	OperationNotSupportedException  *interface{}
	StatusCode                      int64
}
