package operations

import (
"openapi/pkg/models/shared")


type DeleteRelationalDatabaseXAmzTargetEnum string

const (
    DeleteRelationalDatabaseXAmzTargetEnumLightsail20161128DeleteRelationalDatabase DeleteRelationalDatabaseXAmzTargetEnum = "Lightsail_20161128.DeleteRelationalDatabase"
)


type DeleteRelationalDatabaseHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteRelationalDatabaseXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteRelationalDatabaseRequest struct {
    Headers DeleteRelationalDatabaseHeaders 
    Request shared.DeleteRelationalDatabaseRequest `request:"mediaType=application/json"`
    
}

type DeleteRelationalDatabaseResponse struct {
    AccessDeniedException *interface{} 
    AccountSetupInProgressException *interface{} 
    ContentType string 
    DeleteRelationalDatabaseResult *shared.DeleteRelationalDatabaseResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

