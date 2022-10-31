package operations

import (
"openapi/pkg/models/shared")

type CreateImportJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateImportJobRequestBodyImportDataSource struct {
    DataFormat *shared.DataFormatEnum `json:"DataFormat,omitempty"`
    S3URL *string `json:"S3Url,omitempty"`
    
}

type CreateImportJobRequestBodyImportDestination struct {
    ContactListDestination *shared.ContactListDestination `json:"ContactListDestination,omitempty"`
    SuppressionListDestination *shared.SuppressionListDestination `json:"SuppressionListDestination,omitempty"`
    
}

type CreateImportJobRequestBody struct {
    ImportDataSource CreateImportJobRequestBodyImportDataSource `json:"ImportDataSource"`
    ImportDestination CreateImportJobRequestBodyImportDestination `json:"ImportDestination"`
    
}

type CreateImportJobRequest struct {
    Headers CreateImportJobHeaders 
    Request CreateImportJobRequestBody `request:"mediaType=application/json"`
    
}

type CreateImportJobResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    CreateImportJobResponse *shared.CreateImportJobResponse 
    LimitExceededException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

