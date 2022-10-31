package operations

import (
"openapi/pkg/models/shared")


type DeleteDatasetGroupXAmzTargetEnum string

const (
    DeleteDatasetGroupXAmzTargetEnumAmazonPersonalizeDeleteDatasetGroup DeleteDatasetGroupXAmzTargetEnum = "AmazonPersonalize.DeleteDatasetGroup"
)


type DeleteDatasetGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteDatasetGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteDatasetGroupRequest struct {
    Headers DeleteDatasetGroupHeaders 
    Request shared.DeleteDatasetGroupRequest `request:"mediaType=application/json"`
    
}

type DeleteDatasetGroupResponse struct {
    ContentType string 
    InvalidInputException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

