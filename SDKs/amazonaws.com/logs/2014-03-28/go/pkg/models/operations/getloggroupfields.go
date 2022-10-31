package operations

import (
	"openapi/pkg/models/shared"
)

type GetLogGroupFieldsXAmzTargetEnum string

const (
	GetLogGroupFieldsXAmzTargetEnumLogs20140328GetLogGroupFields GetLogGroupFieldsXAmzTargetEnum = "Logs_20140328.GetLogGroupFields"
)

type GetLogGroupFieldsHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetLogGroupFieldsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetLogGroupFieldsRequest struct {
	Headers GetLogGroupFieldsHeaders
	Request shared.GetLogGroupFieldsRequest `request:"mediaType=application/json"`
}

type GetLogGroupFieldsResponse struct {
	ContentType                 string
	GetLogGroupFieldsResponse   *shared.GetLogGroupFieldsResponse
	InvalidParameterException   *interface{}
	LimitExceededException      *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
