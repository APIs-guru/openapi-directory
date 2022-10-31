package operations

import (
"openapi/pkg/models/shared")


type RegisterPatchBaselineForPatchGroupXAmzTargetEnum string

const (
    RegisterPatchBaselineForPatchGroupXAmzTargetEnumAmazonSsmRegisterPatchBaselineForPatchGroup RegisterPatchBaselineForPatchGroupXAmzTargetEnum = "AmazonSSM.RegisterPatchBaselineForPatchGroup"
)


type RegisterPatchBaselineForPatchGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RegisterPatchBaselineForPatchGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RegisterPatchBaselineForPatchGroupRequest struct {
    Headers RegisterPatchBaselineForPatchGroupHeaders 
    Request shared.RegisterPatchBaselineForPatchGroupRequest `request:"mediaType=application/json"`
    
}

type RegisterPatchBaselineForPatchGroupResponse struct {
    AlreadyExistsException *interface{} 
    ContentType string 
    DoesNotExistException *interface{} 
    InternalServerError *interface{} 
    InvalidResourceID *interface{} 
    RegisterPatchBaselineForPatchGroupResult *shared.RegisterPatchBaselineForPatchGroupResult 
    ResourceLimitExceededException *interface{} 
    StatusCode int64 
    
}

