package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeModelPackageXAmzTargetEnum string

const (
	DescribeModelPackageXAmzTargetEnumSageMakerDescribeModelPackage DescribeModelPackageXAmzTargetEnum = "SageMaker.DescribeModelPackage"
)

type DescribeModelPackageHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeModelPackageXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeModelPackageRequest struct {
	Headers DescribeModelPackageHeaders
	Request shared.DescribeModelPackageInput `request:"mediaType=application/json"`
}

type DescribeModelPackageResponse struct {
	ContentType                string
	DescribeModelPackageOutput *shared.DescribeModelPackageOutput
	StatusCode                 int64
}
