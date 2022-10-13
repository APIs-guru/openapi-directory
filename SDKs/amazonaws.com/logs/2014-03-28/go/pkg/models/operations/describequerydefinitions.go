package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeQueryDefinitionsXAmzTargetEnum string

const (
	DescribeQueryDefinitionsXAmzTargetEnumLogs20140328DescribeQueryDefinitions DescribeQueryDefinitionsXAmzTargetEnum = "Logs_20140328.DescribeQueryDefinitions"
)

type DescribeQueryDefinitionsHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeQueryDefinitionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeQueryDefinitionsRequest struct {
	Headers DescribeQueryDefinitionsHeaders
	Request shared.DescribeQueryDefinitionsRequest `request:"mediaType=application/json"`
}

type DescribeQueryDefinitionsResponse struct {
	ContentType                      string
	DescribeQueryDefinitionsResponse *shared.DescribeQueryDefinitionsResponse
	InvalidParameterException        *interface{}
	ServiceUnavailableException      *interface{}
	StatusCode                       int64
}
