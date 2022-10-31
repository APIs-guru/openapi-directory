package operations

import (
"openapi/pkg/models/shared")

type ListCampaignsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type ListCampaignsXAmzTargetEnum string

const (
    ListCampaignsXAmzTargetEnumAmazonPersonalizeListCampaigns ListCampaignsXAmzTargetEnum = "AmazonPersonalize.ListCampaigns"
)


type ListCampaignsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListCampaignsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListCampaignsRequest struct {
    QueryParams ListCampaignsQueryParams 
    Headers ListCampaignsHeaders 
    Request shared.ListCampaignsRequest `request:"mediaType=application/json"`
    
}

type ListCampaignsResponse struct {
    ContentType string 
    InvalidInputException *interface{} 
    InvalidNextTokenException *interface{} 
    ListCampaignsResponse *shared.ListCampaignsResponse 
    StatusCode int64 
    
}

