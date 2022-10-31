package operations

import (
"openapi/pkg/models/shared")

type CreateWorkloadHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type CreateWorkloadRequestBodyEnvironmentEnum string

const (
    CreateWorkloadRequestBodyEnvironmentEnumProduction CreateWorkloadRequestBodyEnvironmentEnum = "PRODUCTION"
CreateWorkloadRequestBodyEnvironmentEnumPreproduction CreateWorkloadRequestBodyEnvironmentEnum = "PREPRODUCTION"
)


type CreateWorkloadRequestBody struct {
    AccountIds []string `json:"AccountIds,omitempty"`
    ArchitecturalDesign *string `json:"ArchitecturalDesign,omitempty"`
    AwsRegions []string `json:"AwsRegions,omitempty"`
    ClientRequestToken string `json:"ClientRequestToken"`
    Description string `json:"Description"`
    Environment CreateWorkloadRequestBodyEnvironmentEnum `json:"Environment"`
    Industry *string `json:"Industry,omitempty"`
    IndustryType *string `json:"IndustryType,omitempty"`
    Lenses []string `json:"Lenses"`
    NonAwsRegions []string `json:"NonAwsRegions,omitempty"`
    Notes *string `json:"Notes,omitempty"`
    PillarPriorities []string `json:"PillarPriorities,omitempty"`
    ReviewOwner string `json:"ReviewOwner"`
    Tags map[string]string `json:"Tags,omitempty"`
    WorkloadName string `json:"WorkloadName"`
    
}

type CreateWorkloadRequest struct {
    Headers CreateWorkloadHeaders 
    Request CreateWorkloadRequestBody `request:"mediaType=application/json"`
    
}

type CreateWorkloadResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    CreateWorkloadOutput *shared.CreateWorkloadOutput 
    InternalServerException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

