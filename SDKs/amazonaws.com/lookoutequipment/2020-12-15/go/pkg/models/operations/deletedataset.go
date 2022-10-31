package operations

import (
"openapi/pkg/models/shared")


type DeleteDatasetXAmzTargetEnum string

const (
    DeleteDatasetXAmzTargetEnumAwsLookoutEquipmentFrontendServiceDeleteDataset DeleteDatasetXAmzTargetEnum = "AWSLookoutEquipmentFrontendService.DeleteDataset"
)


type DeleteDatasetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteDatasetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteDatasetRequest struct {
    Headers DeleteDatasetHeaders 
    Request shared.DeleteDatasetRequest `request:"mediaType=application/json"`
    
}

type DeleteDatasetResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

