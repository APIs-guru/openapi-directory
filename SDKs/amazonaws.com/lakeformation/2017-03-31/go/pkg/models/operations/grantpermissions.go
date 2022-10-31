package operations

import (
"openapi/pkg/models/shared")


type GrantPermissionsXAmzTargetEnum string

const (
    GrantPermissionsXAmzTargetEnumAwsLakeFormationGrantPermissions GrantPermissionsXAmzTargetEnum = "AWSLakeFormation.GrantPermissions"
)


type GrantPermissionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GrantPermissionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GrantPermissionsRequest struct {
    Headers GrantPermissionsHeaders 
    Request shared.GrantPermissionsRequest `request:"mediaType=application/json"`
    
}

type GrantPermissionsResponse struct {
    ConcurrentModificationException *interface{} 
    ContentType string 
    EntityNotFoundException *interface{} 
    GrantPermissionsResponse map[string]interface{} 
    InvalidInputException *interface{} 
    StatusCode int64 
    
}

