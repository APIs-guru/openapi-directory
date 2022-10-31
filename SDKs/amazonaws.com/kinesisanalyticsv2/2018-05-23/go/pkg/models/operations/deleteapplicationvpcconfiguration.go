package operations

import (
"openapi/pkg/models/shared")


type DeleteApplicationVpcConfigurationXAmzTargetEnum string

const (
    DeleteApplicationVpcConfigurationXAmzTargetEnumKinesisAnalytics20180523DeleteApplicationVpcConfiguration DeleteApplicationVpcConfigurationXAmzTargetEnum = "KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration"
)


type DeleteApplicationVpcConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteApplicationVpcConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteApplicationVpcConfigurationRequest struct {
    Headers DeleteApplicationVpcConfigurationHeaders 
    Request shared.DeleteApplicationVpcConfigurationRequest `request:"mediaType=application/json"`
    
}

type DeleteApplicationVpcConfigurationResponse struct {
    ConcurrentModificationException *interface{} 
    ContentType string 
    DeleteApplicationVpcConfigurationResponse *shared.DeleteApplicationVpcConfigurationResponse 
    InvalidApplicationConfigurationException *interface{} 
    InvalidArgumentException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

