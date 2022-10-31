package operations

import (
"openapi/pkg/models/shared")


type DeleteBackupXAmzTargetEnum string

const (
    DeleteBackupXAmzTargetEnumOpsWorksCmV20161101DeleteBackup DeleteBackupXAmzTargetEnum = "OpsWorksCM_V2016_11_01.DeleteBackup"
)


type DeleteBackupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteBackupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteBackupRequest struct {
    Headers DeleteBackupHeaders 
    Request shared.DeleteBackupRequest `request:"mediaType=application/json"`
    
}

type DeleteBackupResponse struct {
    ContentType string 
    DeleteBackupResponse map[string]interface{} 
    InvalidStateException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

