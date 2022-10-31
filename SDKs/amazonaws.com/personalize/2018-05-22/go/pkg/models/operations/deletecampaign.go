package operations

import (
"openapi/pkg/models/shared")


type DeleteCampaignXAmzTargetEnum string

const (
    DeleteCampaignXAmzTargetEnumAmazonPersonalizeDeleteCampaign DeleteCampaignXAmzTargetEnum = "AmazonPersonalize.DeleteCampaign"
)


type DeleteCampaignHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteCampaignXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteCampaignRequest struct {
    Headers DeleteCampaignHeaders 
    Request shared.DeleteCampaignRequest `request:"mediaType=application/json"`
    
}

type DeleteCampaignResponse struct {
    ContentType string 
    InvalidInputException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

