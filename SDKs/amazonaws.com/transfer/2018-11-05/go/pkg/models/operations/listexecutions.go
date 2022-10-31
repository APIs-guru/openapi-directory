package operations

import (
"openapi/pkg/models/shared")

type ListExecutionsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListExecutionsXAmzTargetEnum string

const (
    ListExecutionsXAmzTargetEnumTransferServiceListExecutions ListExecutionsXAmzTargetEnum = "TransferService.ListExecutions"
)


type ListExecutionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListExecutionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListExecutionsRequest struct {
    QueryParams ListExecutionsQueryParams 
    Headers ListExecutionsHeaders 
    Request shared.ListExecutionsRequest `request:"mediaType=application/json"`
    
}

type ListExecutionsResponse struct {
    ContentType string 
    InternalServiceError *interface{} 
    InvalidNextTokenException *interface{} 
    InvalidRequestException *interface{} 
    ListExecutionsResponse *shared.ListExecutionsResponse 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

