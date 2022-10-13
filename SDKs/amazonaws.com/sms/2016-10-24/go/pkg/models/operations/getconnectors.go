package operations

import (
	"openapi/pkg/models/shared"
)

type GetConnectorsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetConnectorsXAmzTargetEnum string

const (
	GetConnectorsXAmzTargetEnumAwsServerMigrationServiceV20161024GetConnectors GetConnectorsXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.GetConnectors"
)

type GetConnectorsHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetConnectorsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetConnectorsRequest struct {
	QueryParams GetConnectorsQueryParams
	Headers     GetConnectorsHeaders
	Request     shared.GetConnectorsRequest `request:"mediaType=application/json"`
}

type GetConnectorsResponse struct {
	ContentType                    string
	GetConnectorsResponse          *shared.GetConnectorsResponse
	StatusCode                     int64
	UnauthorizedOperationException *interface{}
}
