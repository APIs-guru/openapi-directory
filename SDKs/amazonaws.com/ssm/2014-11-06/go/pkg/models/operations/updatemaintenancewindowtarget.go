package operations

import (
"openapi/pkg/models/shared")


type UpdateMaintenanceWindowTargetXAmzTargetEnum string

const (
    UpdateMaintenanceWindowTargetXAmzTargetEnumAmazonSsmUpdateMaintenanceWindowTarget UpdateMaintenanceWindowTargetXAmzTargetEnum = "AmazonSSM.UpdateMaintenanceWindowTarget"
)


type UpdateMaintenanceWindowTargetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateMaintenanceWindowTargetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateMaintenanceWindowTargetRequest struct {
    Headers UpdateMaintenanceWindowTargetHeaders 
    Request shared.UpdateMaintenanceWindowTargetRequest `request:"mediaType=application/json"`
    
}

type UpdateMaintenanceWindowTargetResponse struct {
    ContentType string 
    DoesNotExistException *interface{} 
    InternalServerError *interface{} 
    StatusCode int64 
    UpdateMaintenanceWindowTargetResult *shared.UpdateMaintenanceWindowTargetResult 
    
}

