package operations

import (
"openapi/pkg/models/shared")


type UpdateAccountSettingsXAmzTargetEnum string

const (
    UpdateAccountSettingsXAmzTargetEnumAwsProton20200720UpdateAccountSettings UpdateAccountSettingsXAmzTargetEnum = "AwsProton20200720.UpdateAccountSettings"
)


type UpdateAccountSettingsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateAccountSettingsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateAccountSettingsRequest struct {
    Headers UpdateAccountSettingsHeaders 
    Request shared.UpdateAccountSettingsInput `request:"mediaType=application/json"`
    
}

type UpdateAccountSettingsResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UpdateAccountSettingsOutput *shared.UpdateAccountSettingsOutput 
    ValidationException *interface{} 
    
}

