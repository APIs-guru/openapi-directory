package operations

import (
"openapi/pkg/models/shared")


type ListApplicationsXAmzTargetEnum string

const (
    ListApplicationsXAmzTargetEnumKinesisAnalytics20180523ListApplications ListApplicationsXAmzTargetEnum = "KinesisAnalytics_20180523.ListApplications"
)


type ListApplicationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListApplicationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListApplicationsRequest struct {
    Headers ListApplicationsHeaders 
    Request shared.ListApplicationsRequest `request:"mediaType=application/json"`
    
}

type ListApplicationsResponse struct {
    ContentType string 
    InvalidRequestException *interface{} 
    ListApplicationsResponse *shared.ListApplicationsResponse 
    StatusCode int64 
    
}

