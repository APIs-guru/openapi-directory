package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeModelPackageGroupXAmzTargetEnum string

const (
	DescribeModelPackageGroupXAmzTargetEnumSageMakerDescribeModelPackageGroup DescribeModelPackageGroupXAmzTargetEnum = "SageMaker.DescribeModelPackageGroup"
)

type DescribeModelPackageGroupHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeModelPackageGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeModelPackageGroupRequest struct {
	Headers DescribeModelPackageGroupHeaders
	Request shared.DescribeModelPackageGroupInput `request:"mediaType=application/json"`
}

type DescribeModelPackageGroupResponse struct {
	ContentType                     string
	DescribeModelPackageGroupOutput *shared.DescribeModelPackageGroupOutput
	StatusCode                      int64
}
