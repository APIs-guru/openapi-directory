package operations

import (
"openapi/pkg/models/shared")


type DescribeMyUserProfileXAmzTargetEnum string

const (
    DescribeMyUserProfileXAmzTargetEnumOpsWorks20130218DescribeMyUserProfile DescribeMyUserProfileXAmzTargetEnum = "OpsWorks_20130218.DescribeMyUserProfile"
)


type DescribeMyUserProfileHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeMyUserProfileXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeMyUserProfileRequest struct {
    Headers DescribeMyUserProfileHeaders 
    
}

type DescribeMyUserProfileResponse struct {
    ContentType string 
    DescribeMyUserProfileResult *shared.DescribeMyUserProfileResult 
    StatusCode int64 
    
}

