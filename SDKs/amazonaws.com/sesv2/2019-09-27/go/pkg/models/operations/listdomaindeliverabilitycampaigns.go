package operations

import (
"time"
"openapi/pkg/models/shared")

type ListDomainDeliverabilityCampaignsPathParams struct {
    SubscribedDomain string `pathParam:"style=simple,explode=false,name=SubscribedDomain"`
    
}

type ListDomainDeliverabilityCampaignsQueryParams struct {
    EndDate time.Time `queryParam:"style=form,explode=true,name=EndDate"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    StartDate time.Time `queryParam:"style=form,explode=true,name=StartDate"`
    
}

type ListDomainDeliverabilityCampaignsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListDomainDeliverabilityCampaignsRequest struct {
    PathParams ListDomainDeliverabilityCampaignsPathParams 
    QueryParams ListDomainDeliverabilityCampaignsQueryParams 
    Headers ListDomainDeliverabilityCampaignsHeaders 
    
}

type ListDomainDeliverabilityCampaignsResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    ListDomainDeliverabilityCampaignsResponse *shared.ListDomainDeliverabilityCampaignsResponse 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

