package operations

import (
"openapi/pkg/models/shared")


type CreateOrganizationXAmzTargetEnum string

const (
    CreateOrganizationXAmzTargetEnumWorkMailServiceCreateOrganization CreateOrganizationXAmzTargetEnum = "WorkMailService.CreateOrganization"
)


type CreateOrganizationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateOrganizationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateOrganizationRequest struct {
    Headers CreateOrganizationHeaders 
    Request shared.CreateOrganizationRequest `request:"mediaType=application/json"`
    
}

type CreateOrganizationResponse struct {
    ContentType string 
    CreateOrganizationResponse *shared.CreateOrganizationResponse 
    DirectoryInUseException *interface{} 
    DirectoryUnavailableException *interface{} 
    InvalidParameterException *interface{} 
    LimitExceededException *interface{} 
    NameAvailabilityException *interface{} 
    StatusCode int64 
    
}

