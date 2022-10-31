package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeWorkforceXAmzTargetEnum string

const (
	DescribeWorkforceXAmzTargetEnumSageMakerDescribeWorkforce DescribeWorkforceXAmzTargetEnum = "SageMaker.DescribeWorkforce"
)

type DescribeWorkforceHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeWorkforceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeWorkforceRequest struct {
	Headers DescribeWorkforceHeaders
	Request shared.DescribeWorkforceRequest `request:"mediaType=application/json"`
}

type DescribeWorkforceResponse struct {
	ContentType               string
	DescribeWorkforceResponse *shared.DescribeWorkforceResponse
	StatusCode                int64
}
