package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeConstraintXAmzTargetEnum string

const (
	DescribeConstraintXAmzTargetEnumAws242ServiceCatalogServiceDescribeConstraint DescribeConstraintXAmzTargetEnum = "AWS242ServiceCatalogService.DescribeConstraint"
)

type DescribeConstraintHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeConstraintXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeConstraintRequest struct {
	Headers DescribeConstraintHeaders
	Request shared.DescribeConstraintInput `request:"mediaType=application/json"`
}

type DescribeConstraintResponse struct {
	ContentType               string
	DescribeConstraintOutput  *shared.DescribeConstraintOutput
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
