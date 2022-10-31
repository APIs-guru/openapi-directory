package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeServiceActionExecutionParametersXAmzTargetEnum string

const (
	DescribeServiceActionExecutionParametersXAmzTargetEnumAws242ServiceCatalogServiceDescribeServiceActionExecutionParameters DescribeServiceActionExecutionParametersXAmzTargetEnum = "AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters"
)

type DescribeServiceActionExecutionParametersHeaders struct {
	XAmzAlgorithm     *string                                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeServiceActionExecutionParametersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeServiceActionExecutionParametersRequest struct {
	Headers DescribeServiceActionExecutionParametersHeaders
	Request shared.DescribeServiceActionExecutionParametersInput `request:"mediaType=application/json"`
}

type DescribeServiceActionExecutionParametersResponse struct {
	ContentType                                    string
	DescribeServiceActionExecutionParametersOutput *shared.DescribeServiceActionExecutionParametersOutput
	InvalidParametersException                     *interface{}
	ResourceNotFoundException                      *interface{}
	StatusCode                                     int64
}
