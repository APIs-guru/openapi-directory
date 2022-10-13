package operations

import (
	"openapi/pkg/models/shared"
)

type CreateImportJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateImportJobRequestBodyImportDataSource struct {
	DataFormat *shared.DataFormatEnum `json:"DataFormat"`
	S3URL      *string                `json:"S3Url"`
}

type CreateImportJobRequestBodyImportDestination struct {
	ContactListDestination     *shared.ContactListDestination     `json:"ContactListDestination"`
	SuppressionListDestination *shared.SuppressionListDestination `json:"SuppressionListDestination"`
}

type CreateImportJobRequestBody struct {
	ImportDataSource  CreateImportJobRequestBodyImportDataSource  `json:"ImportDataSource"`
	ImportDestination CreateImportJobRequestBodyImportDestination `json:"ImportDestination"`
}

type CreateImportJobRequest struct {
	Headers CreateImportJobHeaders
	Request CreateImportJobRequestBody `request:"mediaType=application/json"`
}

type CreateImportJobResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	CreateImportJobResponse  *shared.CreateImportJobResponse
	LimitExceededException   *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
