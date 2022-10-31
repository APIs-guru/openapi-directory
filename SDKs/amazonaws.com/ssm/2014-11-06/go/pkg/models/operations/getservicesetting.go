package operations

import (
"openapi/pkg/models/shared")


type GetServiceSettingXAmzTargetEnum string

const (
    GetServiceSettingXAmzTargetEnumAmazonSsmGetServiceSetting GetServiceSettingXAmzTargetEnum = "AmazonSSM.GetServiceSetting"
)


type GetServiceSettingHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetServiceSettingXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetServiceSettingRequest struct {
    Headers GetServiceSettingHeaders 
    Request shared.GetServiceSettingRequest `request:"mediaType=application/json"`
    
}

type GetServiceSettingResponse struct {
    ContentType string 
    GetServiceSettingResult *shared.GetServiceSettingResult 
    InternalServerError *interface{} 
    ServiceSettingNotFound *interface{} 
    StatusCode int64 
    
}

