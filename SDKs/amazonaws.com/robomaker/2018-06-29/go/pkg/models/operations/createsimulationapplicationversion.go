package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSimulationApplicationVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateSimulationApplicationVersionRequestBody struct {
	Application       string   `json:"application"`
	CurrentRevisionID *string  `json:"currentRevisionId,omitempty"`
	ImageDigest       *string  `json:"imageDigest,omitempty"`
	S3Etags           []string `json:"s3Etags,omitempty"`
}

type CreateSimulationApplicationVersionRequest struct {
	Headers CreateSimulationApplicationVersionHeaders
	Request CreateSimulationApplicationVersionRequestBody `request:"mediaType=application/json"`
}

type CreateSimulationApplicationVersionResponse struct {
	ContentType                                string
	CreateSimulationApplicationVersionResponse *shared.CreateSimulationApplicationVersionResponse
	IdempotentParameterMismatchException       *interface{}
	InternalServerException                    *interface{}
	InvalidParameterException                  *interface{}
	LimitExceededException                     *interface{}
	StatusCode                                 int64
	ThrottlingException                        *interface{}
}
