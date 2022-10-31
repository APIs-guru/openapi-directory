package operations

import (
"openapi/pkg/models/shared")


type ImportSSHPublicKeyXAmzTargetEnum string

const (
    ImportSSHPublicKeyXAmzTargetEnumTransferServiceImportSSHPublicKey ImportSSHPublicKeyXAmzTargetEnum = "TransferService.ImportSshPublicKey"
)


type ImportSSHPublicKeyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ImportSSHPublicKeyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ImportSSHPublicKeyRequest struct {
    Headers ImportSSHPublicKeyHeaders 
    Request shared.ImportSSHPublicKeyRequest `request:"mediaType=application/json"`
    
}

type ImportSSHPublicKeyResponse struct {
    ContentType string 
    ImportSSHPublicKeyResponse *shared.ImportSSHPublicKeyResponse 
    InternalServiceError *interface{} 
    InvalidRequestException *interface{} 
    ResourceExistsException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

