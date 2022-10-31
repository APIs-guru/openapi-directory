package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeProductAsAdminXAmzTargetEnum string

const (
	DescribeProductAsAdminXAmzTargetEnumAws242ServiceCatalogServiceDescribeProductAsAdmin DescribeProductAsAdminXAmzTargetEnum = "AWS242ServiceCatalogService.DescribeProductAsAdmin"
)

type DescribeProductAsAdminHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeProductAsAdminXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeProductAsAdminRequest struct {
	Headers DescribeProductAsAdminHeaders
	Request shared.DescribeProductAsAdminInput `request:"mediaType=application/json"`
}

type DescribeProductAsAdminResponse struct {
	ContentType                  string
	DescribeProductAsAdminOutput *shared.DescribeProductAsAdminOutput
	InvalidParametersException   *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
}
