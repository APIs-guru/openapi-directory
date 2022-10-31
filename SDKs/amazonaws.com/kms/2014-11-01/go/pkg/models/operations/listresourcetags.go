package operations

import (
"openapi/pkg/models/shared")


type ListResourceTagsXAmzTargetEnum string

const (
    ListResourceTagsXAmzTargetEnumTrentServiceListResourceTags ListResourceTagsXAmzTargetEnum = "TrentService.ListResourceTags"
)


type ListResourceTagsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListResourceTagsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListResourceTagsRequest struct {
    Headers ListResourceTagsHeaders 
    Request shared.ListResourceTagsRequest `request:"mediaType=application/json"`
    
}

type ListResourceTagsResponse struct {
    ContentType string 
    InvalidArnException *interface{} 
    InvalidMarkerException *interface{} 
    KmsInternalException *interface{} 
    ListResourceTagsResponse *shared.ListResourceTagsResponse 
    NotFoundException *interface{} 
    StatusCode int64 
    
}

