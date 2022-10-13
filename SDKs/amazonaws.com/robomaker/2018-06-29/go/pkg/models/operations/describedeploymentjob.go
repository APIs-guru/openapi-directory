package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDeploymentJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeDeploymentJobRequestBody struct {
	Job string `json:"job"`
}

type DescribeDeploymentJobRequest struct {
	Headers DescribeDeploymentJobHeaders
	Request DescribeDeploymentJobRequestBody `request:"mediaType=application/json"`
}

type DescribeDeploymentJobResponse struct {
	ContentType                   string
	DescribeDeploymentJobResponse *shared.DescribeDeploymentJobResponse
	InternalServerException       *interface{}
	InvalidParameterException     *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
}
