package operations

import (
"openapi/pkg/models/shared")


type DownloadDefaultKeyPairXAmzTargetEnum string

const (
    DownloadDefaultKeyPairXAmzTargetEnumLightsail20161128DownloadDefaultKeyPair DownloadDefaultKeyPairXAmzTargetEnum = "Lightsail_20161128.DownloadDefaultKeyPair"
)


type DownloadDefaultKeyPairHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DownloadDefaultKeyPairXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DownloadDefaultKeyPairRequest struct {
    Headers DownloadDefaultKeyPairHeaders 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type DownloadDefaultKeyPairResponse struct {
    AccessDeniedException *interface{} 
    AccountSetupInProgressException *interface{} 
    ContentType string 
    DownloadDefaultKeyPairResult *shared.DownloadDefaultKeyPairResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

