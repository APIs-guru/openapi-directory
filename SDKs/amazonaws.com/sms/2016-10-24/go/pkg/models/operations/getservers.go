package operations

import (
	"openapi/pkg/models/shared"
)

type GetServersQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetServersXAmzTargetEnum string

const (
	GetServersXAmzTargetEnumAwsServerMigrationServiceV20161024GetServers GetServersXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.GetServers"
)

type GetServersHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetServersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetServersRequest struct {
	QueryParams GetServersQueryParams
	Headers     GetServersHeaders
	Request     shared.GetServersRequest `request:"mediaType=application/json"`
}

type GetServersResponse struct {
	ContentType                       string
	GetServersResponse                *shared.GetServersResponse
	InternalError                     *interface{}
	InvalidParameterException         *interface{}
	MissingRequiredParameterException *interface{}
	StatusCode                        int64
	UnauthorizedOperationException    *interface{}
}
