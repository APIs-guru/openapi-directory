package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeConnectionAliasesXAmzTargetEnum string

const (
	DescribeConnectionAliasesXAmzTargetEnumWorkspacesServiceDescribeConnectionAliases DescribeConnectionAliasesXAmzTargetEnum = "WorkspacesService.DescribeConnectionAliases"
)

type DescribeConnectionAliasesHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeConnectionAliasesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
