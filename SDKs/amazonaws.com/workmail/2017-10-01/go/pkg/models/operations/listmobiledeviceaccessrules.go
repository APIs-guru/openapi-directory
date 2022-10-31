package operations

import (
"openapi/pkg/models/shared")


type ListMobileDeviceAccessRulesXAmzTargetEnum string

const (
    ListMobileDeviceAccessRulesXAmzTargetEnumWorkMailServiceListMobileDeviceAccessRules ListMobileDeviceAccessRulesXAmzTargetEnum = "WorkMailService.ListMobileDeviceAccessRules"
)


type ListMobileDeviceAccessRulesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListMobileDeviceAccessRulesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListMobileDeviceAccessRulesRequest struct {
    Headers ListMobileDeviceAccessRulesHeaders 
    Request shared.ListMobileDeviceAccessRulesRequest `request:"mediaType=application/json"`
    
}

type ListMobileDeviceAccessRulesResponse struct {
    ContentType string 
    InvalidParameterException *interface{} 
    ListMobileDeviceAccessRulesResponse *shared.ListMobileDeviceAccessRulesResponse 
    OrganizationNotFoundException *interface{} 
    OrganizationStateException *interface{} 
    StatusCode int64 
    
}

