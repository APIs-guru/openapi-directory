package operations

import (
	"openapi/pkg/models/shared"
)

type ListTablesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListTablesXAmzTargetEnum string

const (
	ListTablesXAmzTargetEnumTimestream20181101ListTables ListTablesXAmzTargetEnum = "Timestream_20181101.ListTables"
)

type ListTablesHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTablesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListTablesRequest struct {
	QueryParams ListTablesQueryParams
	Headers     ListTablesHeaders
	Request     shared.ListTablesRequest `request:"mediaType=application/json"`
}

type ListTablesResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	InvalidEndpointException  *interface{}
	ListTablesResponse        *shared.ListTablesResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
