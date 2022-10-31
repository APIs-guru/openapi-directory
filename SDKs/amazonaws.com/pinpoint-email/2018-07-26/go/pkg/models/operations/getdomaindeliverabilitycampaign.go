package operations

import (
"openapi/pkg/models/shared")

type GetDomainDeliverabilityCampaignPathParams struct {
    CampaignID string `pathParam:"style=simple,explode=false,name=CampaignId"`
    
}

type GetDomainDeliverabilityCampaignHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDomainDeliverabilityCampaignRequest struct {
    PathParams GetDomainDeliverabilityCampaignPathParams 
    Headers GetDomainDeliverabilityCampaignHeaders 
    
}

type GetDomainDeliverabilityCampaignResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GetDomainDeliverabilityCampaignResponse *shared.GetDomainDeliverabilityCampaignResponse 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

