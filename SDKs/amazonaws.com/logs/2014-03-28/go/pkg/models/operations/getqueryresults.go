package operations

import (
	"openapi/pkg/models/shared"
)

type GetQueryResultsXAmzTargetEnum string

const (
	GetQueryResultsXAmzTargetEnumLogs20140328GetQueryResults GetQueryResultsXAmzTargetEnum = "Logs_20140328.GetQueryResults"
)

type GetQueryResultsHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetQueryResultsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetQueryResultsRequest struct {
	Headers GetQueryResultsHeaders
	Request shared.GetQueryResultsRequest `request:"mediaType=application/json"`
}

type GetQueryResultsResponse struct {
	ContentType                 string
	GetQueryResultsResponse     *shared.GetQueryResultsResponse
	InvalidParameterException   *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
