package operations

import (
"openapi/pkg/models/shared")

type ListStudiosQueryParams struct {
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListStudiosHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListStudiosRequest struct {
    QueryParams ListStudiosQueryParams 
    Headers ListStudiosHeaders 
    
}

type ListStudiosResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServerErrorException *interface{} 
    ListStudiosResponse *shared.ListStudiosResponse 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

