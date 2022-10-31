package operations

import (
"openapi/pkg/models/shared")


type GetDataLakeSettingsXAmzTargetEnum string

const (
    GetDataLakeSettingsXAmzTargetEnumAwsLakeFormationGetDataLakeSettings GetDataLakeSettingsXAmzTargetEnum = "AWSLakeFormation.GetDataLakeSettings"
)


type GetDataLakeSettingsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetDataLakeSettingsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetDataLakeSettingsRequest struct {
    Headers GetDataLakeSettingsHeaders 
    Request shared.GetDataLakeSettingsRequest `request:"mediaType=application/json"`
    
}

type GetDataLakeSettingsResponse struct {
    ContentType string 
    EntityNotFoundException *interface{} 
    GetDataLakeSettingsResponse *shared.GetDataLakeSettingsResponse 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    StatusCode int64 
    
}

