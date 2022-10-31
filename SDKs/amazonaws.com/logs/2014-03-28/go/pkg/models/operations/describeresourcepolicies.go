package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeResourcePoliciesXAmzTargetEnum string

const (
	DescribeResourcePoliciesXAmzTargetEnumLogs20140328DescribeResourcePolicies DescribeResourcePoliciesXAmzTargetEnum = "Logs_20140328.DescribeResourcePolicies"
)

type DescribeResourcePoliciesHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeResourcePoliciesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeResourcePoliciesRequest struct {
	Headers DescribeResourcePoliciesHeaders
	Request shared.DescribeResourcePoliciesRequest `request:"mediaType=application/json"`
}

type DescribeResourcePoliciesResponse struct {
	ContentType                      string
	DescribeResourcePoliciesResponse *shared.DescribeResourcePoliciesResponse
	InvalidParameterException        *interface{}
	ServiceUnavailableException      *interface{}
	StatusCode                       int64
}
