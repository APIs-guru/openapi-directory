package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFleetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeFleetRequestBody struct {
	Fleet string `json:"fleet"`
}

type DescribeFleetRequest struct {
	Headers DescribeFleetHeaders
	Request DescribeFleetRequestBody `request:"mediaType=application/json"`
}

type DescribeFleetResponse struct {
	ContentType               string
	DescribeFleetResponse     *shared.DescribeFleetResponse
	InternalServerException   *interface{}
	InvalidParameterException *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
