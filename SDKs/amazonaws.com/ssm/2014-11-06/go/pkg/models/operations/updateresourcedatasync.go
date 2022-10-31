package operations

import (
"openapi/pkg/models/shared")


type UpdateResourceDataSyncXAmzTargetEnum string

const (
    UpdateResourceDataSyncXAmzTargetEnumAmazonSsmUpdateResourceDataSync UpdateResourceDataSyncXAmzTargetEnum = "AmazonSSM.UpdateResourceDataSync"
)


type UpdateResourceDataSyncHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateResourceDataSyncXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateResourceDataSyncRequest struct {
    Headers UpdateResourceDataSyncHeaders 
    Request shared.UpdateResourceDataSyncRequest `request:"mediaType=application/json"`
    
}

type UpdateResourceDataSyncResponse struct {
    ContentType string 
    InternalServerError *interface{} 
    ResourceDataSyncConflictException *interface{} 
    ResourceDataSyncInvalidConfigurationException *interface{} 
    ResourceDataSyncNotFoundException *interface{} 
    StatusCode int64 
    UpdateResourceDataSyncResult map[string]interface{} 
    
}

