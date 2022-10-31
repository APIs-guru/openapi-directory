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
	ListTablesXAmzTargetEnumRedshiftDataListTables ListTablesXAmzTargetEnum = "RedshiftData.ListTables"
)

type ListTablesHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTablesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListTablesRequest struct {
	QueryParams ListTablesQueryParams
	Headers     ListTablesHeaders
	Request     shared.ListTablesRequest `request:"mediaType=application/json"`
}

type ListTablesResponse struct {
	ContentType             string
	InternalServerException *interface{}
	ListTablesResponse      *shared.ListTablesResponse
	StatusCode              int64
	ValidationException     *interface{}
}
