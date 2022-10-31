package operations

import (
"openapi/pkg/models/shared")

type ListEulasQueryParams struct {
    EulaIds []string `queryParam:"style=form,explode=true,name=eulaIds"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListEulasHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListEulasRequest struct {
    QueryParams ListEulasQueryParams 
    Headers ListEulasHeaders 
    
}

type ListEulasResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServerErrorException *interface{} 
    ListEulasResponse *shared.ListEulasResponse 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

