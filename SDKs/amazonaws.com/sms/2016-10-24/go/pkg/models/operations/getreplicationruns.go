package operations

import (
	"openapi/pkg/models/shared"
)

type GetReplicationRunsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetReplicationRunsXAmzTargetEnum string

const (
	GetReplicationRunsXAmzTargetEnumAwsServerMigrationServiceV20161024GetReplicationRuns GetReplicationRunsXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.GetReplicationRuns"
)

type GetReplicationRunsHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetReplicationRunsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetReplicationRunsRequest struct {
	QueryParams GetReplicationRunsQueryParams
	Headers     GetReplicationRunsHeaders
	Request     shared.GetReplicationRunsRequest `request:"mediaType=application/json"`
}

type GetReplicationRunsResponse struct {
	ContentType                       string
	GetReplicationRunsResponse        *shared.GetReplicationRunsResponse
	InvalidParameterException         *interface{}
	MissingRequiredParameterException *interface{}
	StatusCode                        int64
	UnauthorizedOperationException    *interface{}
}
