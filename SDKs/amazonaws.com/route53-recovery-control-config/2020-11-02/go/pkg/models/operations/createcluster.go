package operations

import (
	"openapi/pkg/models/shared"
)

type CreateClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateClusterRequestBody struct {
	ClientToken *string `json:"ClientToken,omitempty"`
	ClusterName string  `json:"ClusterName"`
}

type CreateClusterRequest struct {
	Headers CreateClusterHeaders
	Request CreateClusterRequestBody `request:"mediaType=application/json"`
}

type CreateClusterResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateClusterResponse         *shared.CreateClusterResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
