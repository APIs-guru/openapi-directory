package operations

import (
	"openapi/pkg/models/shared"
)

type BatchImportFindingsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type BatchImportFindingsRequestBody struct {
	Findings []shared.AwsSecurityFinding `json:"Findings"`
}

type BatchImportFindingsRequest struct {
	Headers BatchImportFindingsHeaders
	Request BatchImportFindingsRequestBody `request:"mediaType=application/json"`
}

type BatchImportFindingsResponse struct {
	BatchImportFindingsResponse *shared.BatchImportFindingsResponse
	ContentType                 string
	InternalException           *interface{}
	InvalidAccessException      *interface{}
	InvalidInputException       *interface{}
	LimitExceededException      *interface{}
	StatusCode                  int64
}
