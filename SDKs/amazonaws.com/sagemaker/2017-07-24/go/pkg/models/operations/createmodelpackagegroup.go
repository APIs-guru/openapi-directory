package operations

import (
"openapi/pkg/models/shared")


type CreateModelPackageGroupXAmzTargetEnum string

const (
    CreateModelPackageGroupXAmzTargetEnumSageMakerCreateModelPackageGroup CreateModelPackageGroupXAmzTargetEnum = "SageMaker.CreateModelPackageGroup"
)


type CreateModelPackageGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateModelPackageGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateModelPackageGroupRequest struct {
    Headers CreateModelPackageGroupHeaders 
    Request shared.CreateModelPackageGroupInput `request:"mediaType=application/json"`
    
}

type CreateModelPackageGroupResponse struct {
    ContentType string 
    CreateModelPackageGroupOutput *shared.CreateModelPackageGroupOutput 
    ResourceLimitExceeded *interface{} 
    StatusCode int64 
    
}

