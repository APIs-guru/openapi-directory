package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeModelPackageGroupXAmzTargetEnum string

const (
	DescribeModelPackageGroupXAmzTargetEnumSageMakerDescribeModelPackageGroup DescribeModelPackageGroupXAmzTargetEnum = "SageMaker.DescribeModelPackageGroup"
)

type DescribeModelPackageGroupHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeModelPackageGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
