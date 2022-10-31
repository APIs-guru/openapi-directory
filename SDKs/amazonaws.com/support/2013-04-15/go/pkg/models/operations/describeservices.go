package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeServicesXAmzTargetEnum string

const (
	DescribeServicesXAmzTargetEnumAwsSupport20130415DescribeServices DescribeServicesXAmzTargetEnum = "AWSSupport_20130415.DescribeServices"
)

type DescribeServicesHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeServicesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeServicesRequest struct {
	Headers DescribeServicesHeaders
	Request shared.DescribeServicesRequest `request:"mediaType=application/json"`
}

type DescribeServicesResponse struct {
	ContentType              string
	DescribeServicesResponse *shared.DescribeServicesResponse
	InternalServerError      *interface{}
	StatusCode               int64
}
