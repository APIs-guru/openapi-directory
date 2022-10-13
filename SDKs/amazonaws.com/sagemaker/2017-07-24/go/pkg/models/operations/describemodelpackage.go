package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeModelPackageXAmzTargetEnum string

const (
	DescribeModelPackageXAmzTargetEnumSageMakerDescribeModelPackage DescribeModelPackageXAmzTargetEnum = "SageMaker.DescribeModelPackage"
)

type DescribeModelPackageHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeModelPackageXAmzTargetEnum `header:"name=X-Amz-Target"`
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
