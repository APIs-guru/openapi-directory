package operations

import (
"openapi/pkg/models/shared")


type DeleteWorkteamXAmzTargetEnum string

const (
    DeleteWorkteamXAmzTargetEnumSageMakerDeleteWorkteam DeleteWorkteamXAmzTargetEnum = "SageMaker.DeleteWorkteam"
)


type DeleteWorkteamHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteWorkteamXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteWorkteamRequest struct {
    Headers DeleteWorkteamHeaders 
    Request shared.DeleteWorkteamRequest `request:"mediaType=application/json"`
    
}

type DeleteWorkteamResponse struct {
    ContentType string 
    DeleteWorkteamResponse *shared.DeleteWorkteamResponse 
    ResourceLimitExceeded *interface{} 
    StatusCode int64 
    
}

