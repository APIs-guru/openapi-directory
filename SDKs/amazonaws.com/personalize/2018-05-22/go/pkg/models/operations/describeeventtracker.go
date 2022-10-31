package operations

import (
"openapi/pkg/models/shared")


type DescribeEventTrackerXAmzTargetEnum string

const (
    DescribeEventTrackerXAmzTargetEnumAmazonPersonalizeDescribeEventTracker DescribeEventTrackerXAmzTargetEnum = "AmazonPersonalize.DescribeEventTracker"
)


type DescribeEventTrackerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeEventTrackerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeEventTrackerRequest struct {
    Headers DescribeEventTrackerHeaders 
    Request shared.DescribeEventTrackerRequest `request:"mediaType=application/json"`
    
}

type DescribeEventTrackerResponse struct {
    ContentType string 
    DescribeEventTrackerResponse *shared.DescribeEventTrackerResponse 
    InvalidInputException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

