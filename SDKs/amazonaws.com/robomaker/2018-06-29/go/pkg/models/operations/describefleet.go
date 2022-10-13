package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFleetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
