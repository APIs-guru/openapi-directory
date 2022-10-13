package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeRecordXAmzTargetEnum string

const (
	DescribeRecordXAmzTargetEnumAws242ServiceCatalogServiceDescribeRecord DescribeRecordXAmzTargetEnum = "AWS242ServiceCatalogService.DescribeRecord"
)

type DescribeRecordHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeRecordXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeRecordRequest struct {
	Headers DescribeRecordHeaders
	Request shared.DescribeRecordInput `request:"mediaType=application/json"`
}

type DescribeRecordResponse struct {
	ContentType               string
	DescribeRecordOutput      *shared.DescribeRecordOutput
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
