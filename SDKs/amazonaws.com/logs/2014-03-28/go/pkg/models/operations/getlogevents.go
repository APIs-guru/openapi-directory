package operations

import (
	"openapi/pkg/models/shared"
)

type GetLogEventsQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetLogEventsXAmzTargetEnum string

const (
	GetLogEventsXAmzTargetEnumLogs20140328GetLogEvents GetLogEventsXAmzTargetEnum = "Logs_20140328.GetLogEvents"
)

type GetLogEventsHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetLogEventsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetLogEventsRequest struct {
	QueryParams GetLogEventsQueryParams
	Headers     GetLogEventsHeaders
	Request     shared.GetLogEventsRequest `request:"mediaType=application/json"`
}

type GetLogEventsResponse struct {
	ContentType                 string
	GetLogEventsResponse        *shared.GetLogEventsResponse
	InvalidParameterException   *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
