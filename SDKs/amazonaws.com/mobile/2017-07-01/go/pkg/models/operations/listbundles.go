package operations

import (
"openapi/pkg/models/shared")

type ListBundlesQueryParams struct {
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListBundlesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListBundlesRequest struct {
    QueryParams ListBundlesQueryParams 
    Headers ListBundlesHeaders 
    
}

type ListBundlesResponse struct {
    BadRequestException *shared.BadRequestException 
    ContentType string 
    InternalFailureException *shared.InternalFailureException 
    ListBundlesResult *shared.ListBundlesResult 
    ServiceUnavailableException *shared.ServiceUnavailableException 
    StatusCode int64 
    TooManyRequestsException *shared.TooManyRequestsException 
    UnauthorizedException *shared.UnauthorizedException 
    
}

