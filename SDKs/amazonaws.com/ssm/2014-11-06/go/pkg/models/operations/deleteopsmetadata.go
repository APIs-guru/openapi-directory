package operations

import (
"openapi/pkg/models/shared")


type DeleteOpsMetadataXAmzTargetEnum string

const (
    DeleteOpsMetadataXAmzTargetEnumAmazonSsmDeleteOpsMetadata DeleteOpsMetadataXAmzTargetEnum = "AmazonSSM.DeleteOpsMetadata"
)


type DeleteOpsMetadataHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteOpsMetadataXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteOpsMetadataRequest struct {
    Headers DeleteOpsMetadataHeaders 
    Request shared.DeleteOpsMetadataRequest `request:"mediaType=application/json"`
    
}

type DeleteOpsMetadataResponse struct {
    ContentType string 
    DeleteOpsMetadataResult map[string]interface{} 
    InternalServerError *interface{} 
    OpsMetadataInvalidArgumentException *interface{} 
    OpsMetadataNotFoundException *interface{} 
    StatusCode int64 
    
}

