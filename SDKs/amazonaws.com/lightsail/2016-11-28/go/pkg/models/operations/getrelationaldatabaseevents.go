package operations

import (
"openapi/pkg/models/shared")


type GetRelationalDatabaseEventsXAmzTargetEnum string

const (
    GetRelationalDatabaseEventsXAmzTargetEnumLightsail20161128GetRelationalDatabaseEvents GetRelationalDatabaseEventsXAmzTargetEnum = "Lightsail_20161128.GetRelationalDatabaseEvents"
)


type GetRelationalDatabaseEventsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetRelationalDatabaseEventsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetRelationalDatabaseEventsRequest struct {
    Headers GetRelationalDatabaseEventsHeaders 
    Request shared.GetRelationalDatabaseEventsRequest `request:"mediaType=application/json"`
    
}

type GetRelationalDatabaseEventsResponse struct {
    AccessDeniedException *interface{} 
    AccountSetupInProgressException *interface{} 
    ContentType string 
    GetRelationalDatabaseEventsResult *shared.GetRelationalDatabaseEventsResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

