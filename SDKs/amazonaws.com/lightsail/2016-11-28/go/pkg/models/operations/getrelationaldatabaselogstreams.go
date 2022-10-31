package operations

import (
"openapi/pkg/models/shared")


type GetRelationalDatabaseLogStreamsXAmzTargetEnum string

const (
    GetRelationalDatabaseLogStreamsXAmzTargetEnumLightsail20161128GetRelationalDatabaseLogStreams GetRelationalDatabaseLogStreamsXAmzTargetEnum = "Lightsail_20161128.GetRelationalDatabaseLogStreams"
)


type GetRelationalDatabaseLogStreamsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetRelationalDatabaseLogStreamsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetRelationalDatabaseLogStreamsRequest struct {
    Headers GetRelationalDatabaseLogStreamsHeaders 
    Request shared.GetRelationalDatabaseLogStreamsRequest `request:"mediaType=application/json"`
    
}

type GetRelationalDatabaseLogStreamsResponse struct {
    AccessDeniedException *interface{} 
    AccountSetupInProgressException *interface{} 
    ContentType string 
    GetRelationalDatabaseLogStreamsResult *shared.GetRelationalDatabaseLogStreamsResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

