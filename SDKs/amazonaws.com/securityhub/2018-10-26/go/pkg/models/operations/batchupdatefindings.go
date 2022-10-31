package operations

import (
"openapi/pkg/models/shared")

type BatchUpdateFindingsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type BatchUpdateFindingsRequestBodyNote struct {
    Text *string `json:"Text,omitempty"`
    UpdatedBy *string `json:"UpdatedBy,omitempty"`
    
}

type BatchUpdateFindingsRequestBodySeverity struct {
    Label *shared.SeverityLabelEnum `json:"Label,omitempty"`
    Normalized *int64 `json:"Normalized,omitempty"`
    Product *float64 `json:"Product,omitempty"`
    
}


type BatchUpdateFindingsRequestBodyVerificationStateEnum string

const (
    BatchUpdateFindingsRequestBodyVerificationStateEnumUnknown BatchUpdateFindingsRequestBodyVerificationStateEnum = "UNKNOWN"
BatchUpdateFindingsRequestBodyVerificationStateEnumTruePositive BatchUpdateFindingsRequestBodyVerificationStateEnum = "TRUE_POSITIVE"
BatchUpdateFindingsRequestBodyVerificationStateEnumFalsePositive BatchUpdateFindingsRequestBodyVerificationStateEnum = "FALSE_POSITIVE"
BatchUpdateFindingsRequestBodyVerificationStateEnumBenignPositive BatchUpdateFindingsRequestBodyVerificationStateEnum = "BENIGN_POSITIVE"
)


type BatchUpdateFindingsRequestBodyWorkflow struct {
    Status *shared.WorkflowStatusEnum `json:"Status,omitempty"`
    
}

type BatchUpdateFindingsRequestBody struct {
    Confidence *int64 `json:"Confidence,omitempty"`
    Criticality *int64 `json:"Criticality,omitempty"`
    FindingIdentifiers []shared.AwsSecurityFindingIdentifier `json:"FindingIdentifiers"`
    Note *BatchUpdateFindingsRequestBodyNote `json:"Note,omitempty"`
    RelatedFindings []shared.RelatedFinding `json:"RelatedFindings,omitempty"`
    Severity *BatchUpdateFindingsRequestBodySeverity `json:"Severity,omitempty"`
    Types []string `json:"Types,omitempty"`
    UserDefinedFields map[string]string `json:"UserDefinedFields,omitempty"`
    VerificationState *BatchUpdateFindingsRequestBodyVerificationStateEnum `json:"VerificationState,omitempty"`
    Workflow *BatchUpdateFindingsRequestBodyWorkflow `json:"Workflow,omitempty"`
    
}

type BatchUpdateFindingsRequest struct {
    Headers BatchUpdateFindingsHeaders 
    Request BatchUpdateFindingsRequestBody `request:"mediaType=application/json"`
    
}

type BatchUpdateFindingsResponse struct {
    BatchUpdateFindingsResponse *shared.BatchUpdateFindingsResponse 
    ContentType string 
    InternalException *interface{} 
    InvalidAccessException *interface{} 
    InvalidInputException *interface{} 
    LimitExceededException *interface{} 
    StatusCode int64 
    
}

