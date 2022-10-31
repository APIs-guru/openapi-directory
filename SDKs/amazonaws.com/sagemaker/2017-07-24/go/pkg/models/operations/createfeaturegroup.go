package operations

import (
"openapi/pkg/models/shared")


type CreateFeatureGroupXAmzTargetEnum string

const (
    CreateFeatureGroupXAmzTargetEnumSageMakerCreateFeatureGroup CreateFeatureGroupXAmzTargetEnum = "SageMaker.CreateFeatureGroup"
)


type CreateFeatureGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateFeatureGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateFeatureGroupRequest struct {
    Headers CreateFeatureGroupHeaders 
    Request shared.CreateFeatureGroupRequest `request:"mediaType=application/json"`
    
}

type CreateFeatureGroupResponse struct {
    ContentType string 
    CreateFeatureGroupResponse *shared.CreateFeatureGroupResponse 
    ResourceInUse *interface{} 
    ResourceLimitExceeded *interface{} 
    StatusCode int64 
    
}

