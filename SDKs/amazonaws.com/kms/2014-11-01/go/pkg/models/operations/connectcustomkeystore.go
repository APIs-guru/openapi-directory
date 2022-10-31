package operations

import (
"openapi/pkg/models/shared")


type ConnectCustomKeyStoreXAmzTargetEnum string

const (
    ConnectCustomKeyStoreXAmzTargetEnumTrentServiceConnectCustomKeyStore ConnectCustomKeyStoreXAmzTargetEnum = "TrentService.ConnectCustomKeyStore"
)


type ConnectCustomKeyStoreHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ConnectCustomKeyStoreXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ConnectCustomKeyStoreRequest struct {
    Headers ConnectCustomKeyStoreHeaders 
    Request shared.ConnectCustomKeyStoreRequest `request:"mediaType=application/json"`
    
}

type ConnectCustomKeyStoreResponse struct {
    CloudHsmClusterInvalidConfigurationException *interface{} 
    CloudHsmClusterNotActiveException *interface{} 
    ConnectCustomKeyStoreResponse map[string]interface{} 
    ContentType string 
    CustomKeyStoreInvalidStateException *interface{} 
    CustomKeyStoreNotFoundException *interface{} 
    KmsInternalException *interface{} 
    StatusCode int64 
    
}

