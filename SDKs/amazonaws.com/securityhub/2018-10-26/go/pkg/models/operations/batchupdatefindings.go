package operations

import (
	"openapi/pkg/models/shared"
)

type BatchUpdateFindingsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type BatchUpdateFindingsRequestBodyNote struct {
	Text      *string `json:"Text"`
	UpdatedBy *string `json:"UpdatedBy"`
}

type BatchUpdateFindingsRequestBodySeverity struct {
	Label      *shared.SeverityLabelEnum `json:"Label"`
	Normalized *int64                    `json:"Normalized"`
	Product    *float64                  `json:"Product"`
}

type BatchUpdateFindingsRequestBodyVerificationStateEnum string

const (
	BatchUpdateFindingsRequestBodyVerificationStateEnumUnknown        BatchUpdateFindingsRequestBodyVerificationStateEnum = "UNKNOWN"
	BatchUpdateFindingsRequestBodyVerificationStateEnumTruePositive   BatchUpdateFindingsRequestBodyVerificationStateEnum = "TRUE_POSITIVE"
	BatchUpdateFindingsRequestBodyVerificationStateEnumFalsePositive  BatchUpdateFindingsRequestBodyVerificationStateEnum = "FALSE_POSITIVE"
	BatchUpdateFindingsRequestBodyVerificationStateEnumBenignPositive BatchUpdateFindingsRequestBodyVerificationStateEnum = "BENIGN_POSITIVE"
)

type BatchUpdateFindingsRequestBodyWorkflow struct {
	Status *shared.WorkflowStatusEnum `json:"Status"`
}

type BatchUpdateFindingsRequestBody struct {
	Confidence         *int64                                               `json:"Confidence"`
	Criticality        *int64                                               `json:"Criticality"`
	FindingIdentifiers []shared.AwsSecurityFindingIdentifier                `json:"FindingIdentifiers"`
	Note               *BatchUpdateFindingsRequestBodyNote                  `json:"Note"`
	RelatedFindings    []shared.RelatedFinding                              `json:"RelatedFindings"`
	Severity           *BatchUpdateFindingsRequestBodySeverity              `json:"Severity"`
	Types              []string                                             `json:"Types"`
	UserDefinedFields  map[string]string                                    `json:"UserDefinedFields"`
	VerificationState  *BatchUpdateFindingsRequestBodyVerificationStateEnum `json:"VerificationState"`
	Workflow           *BatchUpdateFindingsRequestBodyWorkflow              `json:"Workflow"`
}

type BatchUpdateFindingsRequest struct {
	Headers BatchUpdateFindingsHeaders
	Request BatchUpdateFindingsRequestBody `request:"mediaType=application/json"`
}

type BatchUpdateFindingsResponse struct {
	BatchUpdateFindingsResponse *shared.BatchUpdateFindingsResponse
	ContentType                 string
	InternalException           *interface{}
	InvalidAccessException      *interface{}
	InvalidInputException       *interface{}
	LimitExceededException      *interface{}
	StatusCode                  int64
}
