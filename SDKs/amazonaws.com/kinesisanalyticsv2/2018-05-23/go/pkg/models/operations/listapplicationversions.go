package operations

import (
"openapi/pkg/models/shared")


type ListApplicationVersionsXAmzTargetEnum string

const (
    ListApplicationVersionsXAmzTargetEnumKinesisAnalytics20180523ListApplicationVersions ListApplicationVersionsXAmzTargetEnum = "KinesisAnalytics_20180523.ListApplicationVersions"
)


type ListApplicationVersionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListApplicationVersionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListApplicationVersionsRequest struct {
    Headers ListApplicationVersionsHeaders 
    Request shared.ListApplicationVersionsRequest `request:"mediaType=application/json"`
    
}

type ListApplicationVersionsResponse struct {
    ContentType string 
    InvalidArgumentException *interface{} 
    ListApplicationVersionsResponse *shared.ListApplicationVersionsResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UnsupportedOperationException *interface{} 
    
}

