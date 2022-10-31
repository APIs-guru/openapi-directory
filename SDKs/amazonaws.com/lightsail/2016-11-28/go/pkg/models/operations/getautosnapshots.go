package operations

import (
"openapi/pkg/models/shared")


type GetAutoSnapshotsXAmzTargetEnum string

const (
    GetAutoSnapshotsXAmzTargetEnumLightsail20161128GetAutoSnapshots GetAutoSnapshotsXAmzTargetEnum = "Lightsail_20161128.GetAutoSnapshots"
)


type GetAutoSnapshotsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetAutoSnapshotsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetAutoSnapshotsRequest struct {
    Headers GetAutoSnapshotsHeaders 
    Request shared.GetAutoSnapshotsRequest `request:"mediaType=application/json"`
    
}

type GetAutoSnapshotsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetAutoSnapshotsResult *shared.GetAutoSnapshotsResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

