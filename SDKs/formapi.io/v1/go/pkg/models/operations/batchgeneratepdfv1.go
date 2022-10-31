package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGeneratePdfV1PathParams struct {
	TemplateID string `pathParam:"style=simple,explode=false,name=template_id"`
}

type BatchGeneratePdfV1Security struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type BatchGeneratePdfV1Request struct {
	PathParams BatchGeneratePdfV1PathParams
	Request    []map[string]interface{} `request:"mediaType=application/json"`
	Security   BatchGeneratePdfV1Security
}

type BatchGeneratePdfV1CreateSubmissionResponseStatusEnum string

const (
	BatchGeneratePdfV1CreateSubmissionResponseStatusEnumSuccess BatchGeneratePdfV1CreateSubmissionResponseStatusEnum = "success"
	BatchGeneratePdfV1CreateSubmissionResponseStatusEnumError   BatchGeneratePdfV1CreateSubmissionResponseStatusEnum = "error"
)

type BatchGeneratePdfV1CreateSubmissionResponse struct {
	Errors     []string                                             `json:"errors,omitempty"`
	Status     BatchGeneratePdfV1CreateSubmissionResponseStatusEnum `json:"status"`
	Submission shared.Submission                                    `json:"submission"`
}

type BatchGeneratePdfV1Response struct {
	ContentType               string
	StatusCode                int64
	AuthenticationError       *shared.AuthenticationError
	CreateSubmissionResponses []BatchGeneratePdfV1CreateSubmissionResponse
	Error                     *shared.Error
	InvalidRequests           []shared.InvalidRequest
}
