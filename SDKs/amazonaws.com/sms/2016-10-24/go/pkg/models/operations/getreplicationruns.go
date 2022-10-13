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
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetReplicationRunsXAmzTargetEnum `header:"name=X-Amz-Target"`
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
