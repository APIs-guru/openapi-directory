package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDeploymentJobHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
