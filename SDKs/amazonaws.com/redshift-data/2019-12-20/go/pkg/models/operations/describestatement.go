package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeStatementXAmzTargetEnum string

const (
	DescribeStatementXAmzTargetEnumRedshiftDataDescribeStatement DescribeStatementXAmzTargetEnum = "RedshiftData.DescribeStatement"
)

type DescribeStatementHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeStatementXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeStatementRequest struct {
	Headers DescribeStatementHeaders
	Request shared.DescribeStatementRequest `request:"mediaType=application/json"`
}

type DescribeStatementResponse struct {
	ContentType               string
	DescribeStatementResponse *shared.DescribeStatementResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
