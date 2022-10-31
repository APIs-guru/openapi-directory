package operations

import (
"openapi/pkg/models/shared")

type ListEmailIdentitiesQueryParams struct {
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListEmailIdentitiesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListEmailIdentitiesRequest struct {
    QueryParams ListEmailIdentitiesQueryParams 
    Headers ListEmailIdentitiesHeaders 
    
}

type ListEmailIdentitiesResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    ListEmailIdentitiesResponse *shared.ListEmailIdentitiesResponse 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

