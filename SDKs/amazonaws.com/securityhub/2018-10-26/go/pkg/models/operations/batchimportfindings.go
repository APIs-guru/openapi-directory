package operations

import (
	"openapi/pkg/models/shared"
)

type BatchImportFindingsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
