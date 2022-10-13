package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetRecordHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type BatchGetRecordRequestBody struct {
	Identifiers []shared.BatchGetRecordIdentifier `json:"Identifiers"`
}

type BatchGetRecordRequest struct {
	Headers BatchGetRecordHeaders
	Request BatchGetRecordRequestBody `request:"mediaType=application/json"`
}

type BatchGetRecordResponse struct {
	AccessForbidden        *interface{}
	BatchGetRecordResponse *shared.BatchGetRecordResponse
	ContentType            string
	InternalFailure        *interface{}
	ServiceUnavailable     *interface{}
	StatusCode             int64
	ValidationError        *interface{}
}
