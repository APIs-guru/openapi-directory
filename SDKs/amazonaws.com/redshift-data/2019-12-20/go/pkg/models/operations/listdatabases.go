package operations

import (
	"openapi/pkg/models/shared"
)

type ListDatabasesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListDatabasesXAmzTargetEnum string

const (
	ListDatabasesXAmzTargetEnumRedshiftDataListDatabases ListDatabasesXAmzTargetEnum = "RedshiftData.ListDatabases"
)

type ListDatabasesHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDatabasesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListDatabasesRequest struct {
	QueryParams ListDatabasesQueryParams
	Headers     ListDatabasesHeaders
	Request     shared.ListDatabasesRequest `request:"mediaType=application/json"`
}

type ListDatabasesResponse struct {
	ContentType             string
	InternalServerException *interface{}
	ListDatabasesResponse   *shared.ListDatabasesResponse
	StatusCode              int64
	ValidationException     *interface{}
}
