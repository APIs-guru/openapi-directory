package operations

import (
"openapi/pkg/models/shared")


type GetPatchBaselineForPatchGroupXAmzTargetEnum string

const (
    GetPatchBaselineForPatchGroupXAmzTargetEnumAmazonSsmGetPatchBaselineForPatchGroup GetPatchBaselineForPatchGroupXAmzTargetEnum = "AmazonSSM.GetPatchBaselineForPatchGroup"
)


type GetPatchBaselineForPatchGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetPatchBaselineForPatchGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetPatchBaselineForPatchGroupRequest struct {
    Headers GetPatchBaselineForPatchGroupHeaders 
    Request shared.GetPatchBaselineForPatchGroupRequest `request:"mediaType=application/json"`
    
}

type GetPatchBaselineForPatchGroupResponse struct {
    ContentType string 
    GetPatchBaselineForPatchGroupResult *shared.GetPatchBaselineForPatchGroupResult 
    InternalServerError *interface{} 
    StatusCode int64 
    
}

