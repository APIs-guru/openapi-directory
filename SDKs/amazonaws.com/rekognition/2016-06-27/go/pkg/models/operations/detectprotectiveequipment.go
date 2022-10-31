package operations

import (
"openapi/pkg/models/shared")


type DetectProtectiveEquipmentXAmzTargetEnum string

const (
    DetectProtectiveEquipmentXAmzTargetEnumRekognitionServiceDetectProtectiveEquipment DetectProtectiveEquipmentXAmzTargetEnum = "RekognitionService.DetectProtectiveEquipment"
)


type DetectProtectiveEquipmentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DetectProtectiveEquipmentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DetectProtectiveEquipmentRequest struct {
    Headers DetectProtectiveEquipmentHeaders 
    Request shared.DetectProtectiveEquipmentRequest `request:"mediaType=application/json"`
    
}

type DetectProtectiveEquipmentResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DetectProtectiveEquipmentResponse *shared.DetectProtectiveEquipmentResponse 
    ImageTooLargeException *interface{} 
    InternalServerError *interface{} 
    InvalidImageFormatException *interface{} 
    InvalidParameterException *interface{} 
    InvalidS3ObjectException *interface{} 
    ProvisionedThroughputExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

