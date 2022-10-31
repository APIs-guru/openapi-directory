package operations

import (
"openapi/pkg/models/shared")

type ListOutpostsQueryParams struct {
    AvailabilityZoneFilter []string `queryParam:"style=form,explode=true,name=AvailabilityZoneFilter"`
    AvailabilityZoneIDFilter []string `queryParam:"style=form,explode=true,name=AvailabilityZoneIdFilter"`
    LifeCycleStatusFilter []string `queryParam:"style=form,explode=true,name=LifeCycleStatusFilter"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type ListOutpostsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListOutpostsRequest struct {
    QueryParams ListOutpostsQueryParams 
    Headers ListOutpostsHeaders 
    
}

type ListOutpostsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListOutpostsOutput *shared.ListOutpostsOutput 
    StatusCode int64 
    ValidationException *interface{} 
    
}

