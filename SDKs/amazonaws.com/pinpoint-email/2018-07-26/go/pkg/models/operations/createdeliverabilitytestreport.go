package operations

import (
"openapi/pkg/models/shared")

type CreateDeliverabilityTestReportHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateDeliverabilityTestReportRequestBodyContent struct {
    Raw *shared.RawMessage `json:"Raw,omitempty"`
    Simple *shared.Message `json:"Simple,omitempty"`
    Template *shared.Template `json:"Template,omitempty"`
    
}

type CreateDeliverabilityTestReportRequestBody struct {
    Content CreateDeliverabilityTestReportRequestBodyContent `json:"Content"`
    FromEmailAddress string `json:"FromEmailAddress"`
    ReportName *string `json:"ReportName,omitempty"`
    Tags []shared.Tag `json:"Tags,omitempty"`
    
}

type CreateDeliverabilityTestReportRequest struct {
    Headers CreateDeliverabilityTestReportHeaders 
    Request CreateDeliverabilityTestReportRequestBody `request:"mediaType=application/json"`
    
}

type CreateDeliverabilityTestReportResponse struct {
    AccountSuspendedException *interface{} 
    BadRequestException *interface{} 
    ConcurrentModificationException *interface{} 
    ContentType string 
    CreateDeliverabilityTestReportResponse *shared.CreateDeliverabilityTestReportResponse 
    LimitExceededException *interface{} 
    MailFromDomainNotVerifiedException *interface{} 
    MessageRejected *interface{} 
    NotFoundException *interface{} 
    SendingPausedException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

