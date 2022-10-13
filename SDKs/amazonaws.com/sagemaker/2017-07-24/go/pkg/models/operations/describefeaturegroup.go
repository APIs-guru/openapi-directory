package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFeatureGroupXAmzTargetEnum string

const (
	DescribeFeatureGroupXAmzTargetEnumSageMakerDescribeFeatureGroup DescribeFeatureGroupXAmzTargetEnum = "SageMaker.DescribeFeatureGroup"
)

type DescribeFeatureGroupHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeFeatureGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeFeatureGroupRequest struct {
	Headers DescribeFeatureGroupHeaders
	Request shared.DescribeFeatureGroupRequest `request:"mediaType=application/json"`
}

type DescribeFeatureGroupResponse struct {
	ContentType                  string
	DescribeFeatureGroupResponse *shared.DescribeFeatureGroupResponse
	ResourceNotFound             *interface{}
	StatusCode                   int64
}
