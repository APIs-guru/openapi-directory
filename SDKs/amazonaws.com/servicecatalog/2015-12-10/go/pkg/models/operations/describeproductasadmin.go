package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeProductAsAdminXAmzTargetEnum string

const (
	DescribeProductAsAdminXAmzTargetEnumAws242ServiceCatalogServiceDescribeProductAsAdmin DescribeProductAsAdminXAmzTargetEnum = "AWS242ServiceCatalogService.DescribeProductAsAdmin"
)

type DescribeProductAsAdminHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeProductAsAdminXAmzTargetEnum `header:"name=X-Amz-Target"`
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
