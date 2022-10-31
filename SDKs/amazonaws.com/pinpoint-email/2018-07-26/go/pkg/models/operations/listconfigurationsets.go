package operations

import (
"openapi/pkg/models/shared")

type ListConfigurationSetsQueryParams struct {
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListConfigurationSetsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListConfigurationSetsRequest struct {
    QueryParams ListConfigurationSetsQueryParams 
    Headers ListConfigurationSetsHeaders 
    
}

type ListConfigurationSetsResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    ListConfigurationSetsResponse *shared.ListConfigurationSetsResponse 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

