package operations

import (
"openapi/pkg/models/shared")

type ListEulaAcceptancesPathParams struct {
    StudioID string `pathParam:"style=simple,explode=false,name=studioId"`
    
}

type ListEulaAcceptancesQueryParams struct {
    EulaIds []string `queryParam:"style=form,explode=true,name=eulaIds"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListEulaAcceptancesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListEulaAcceptancesRequest struct {
    PathParams ListEulaAcceptancesPathParams 
    QueryParams ListEulaAcceptancesQueryParams 
    Headers ListEulaAcceptancesHeaders 
    
}

type ListEulaAcceptancesResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServerErrorException *interface{} 
    ListEulaAcceptancesResponse *shared.ListEulaAcceptancesResponse 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

