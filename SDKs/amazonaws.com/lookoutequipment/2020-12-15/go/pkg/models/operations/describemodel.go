package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeModelXAmzTargetEnum string

const (
	DescribeModelXAmzTargetEnumAwsLookoutEquipmentFrontendServiceDescribeModel DescribeModelXAmzTargetEnum = "AWSLookoutEquipmentFrontendService.DescribeModel"
)

type DescribeModelHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeModelXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeModelRequest struct {
	Headers DescribeModelHeaders
	Request shared.DescribeModelRequest `request:"mediaType=application/json"`
}

type DescribeModelResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DescribeModelResponse     *shared.DescribeModelResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
