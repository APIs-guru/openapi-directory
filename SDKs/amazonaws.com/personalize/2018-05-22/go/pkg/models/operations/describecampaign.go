package operations

import (
"openapi/pkg/models/shared")


type DescribeCampaignXAmzTargetEnum string

const (
    DescribeCampaignXAmzTargetEnumAmazonPersonalizeDescribeCampaign DescribeCampaignXAmzTargetEnum = "AmazonPersonalize.DescribeCampaign"
)


type DescribeCampaignHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeCampaignXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeCampaignRequest struct {
    Headers DescribeCampaignHeaders 
    Request shared.DescribeCampaignRequest `request:"mediaType=application/json"`
    
}

type DescribeCampaignResponse struct {
    ContentType string 
    DescribeCampaignResponse *shared.DescribeCampaignResponse 
    InvalidInputException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

