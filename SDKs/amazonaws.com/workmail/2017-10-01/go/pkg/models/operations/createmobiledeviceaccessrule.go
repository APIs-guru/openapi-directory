package operations

import (
"openapi/pkg/models/shared")


type CreateMobileDeviceAccessRuleXAmzTargetEnum string

const (
    CreateMobileDeviceAccessRuleXAmzTargetEnumWorkMailServiceCreateMobileDeviceAccessRule CreateMobileDeviceAccessRuleXAmzTargetEnum = "WorkMailService.CreateMobileDeviceAccessRule"
)


type CreateMobileDeviceAccessRuleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateMobileDeviceAccessRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateMobileDeviceAccessRuleRequest struct {
    Headers CreateMobileDeviceAccessRuleHeaders 
    Request shared.CreateMobileDeviceAccessRuleRequest `request:"mediaType=application/json"`
    
}

type CreateMobileDeviceAccessRuleResponse struct {
    ContentType string 
    CreateMobileDeviceAccessRuleResponse *shared.CreateMobileDeviceAccessRuleResponse 
    InvalidParameterException *interface{} 
    LimitExceededException *interface{} 
    OrganizationNotFoundException *interface{} 
    OrganizationStateException *interface{} 
    StatusCode int64 
    
}

