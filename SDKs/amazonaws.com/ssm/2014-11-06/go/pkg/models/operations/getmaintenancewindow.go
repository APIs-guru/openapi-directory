package operations

import (
"openapi/pkg/models/shared")


type GetMaintenanceWindowXAmzTargetEnum string

const (
    GetMaintenanceWindowXAmzTargetEnumAmazonSsmGetMaintenanceWindow GetMaintenanceWindowXAmzTargetEnum = "AmazonSSM.GetMaintenanceWindow"
)


type GetMaintenanceWindowHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetMaintenanceWindowXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetMaintenanceWindowRequest struct {
    Headers GetMaintenanceWindowHeaders 
    Request shared.GetMaintenanceWindowRequest `request:"mediaType=application/json"`
    
}

type GetMaintenanceWindowResponse struct {
    ContentType string 
    DoesNotExistException *interface{} 
    GetMaintenanceWindowResult *shared.GetMaintenanceWindowResult 
    InternalServerError *interface{} 
    StatusCode int64 
    
}

