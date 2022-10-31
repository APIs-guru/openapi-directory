package operations

import (
	"openapi/pkg/models/shared"
)

type StartQueryXAmzTargetEnum string

const (
	StartQueryXAmzTargetEnumLogs20140328StartQuery StartQueryXAmzTargetEnum = "Logs_20140328.StartQuery"
)

type StartQueryHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartQueryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StartQueryRequest struct {
	Headers StartQueryHeaders
	Request shared.StartQueryRequest `request:"mediaType=application/json"`
}

type StartQueryResponse struct {
	ContentType                 string
	InvalidParameterException   *interface{}
	LimitExceededException      *interface{}
	MalformedQueryException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StartQueryResponse          *shared.StartQueryResponse
	StatusCode                  int64
}
