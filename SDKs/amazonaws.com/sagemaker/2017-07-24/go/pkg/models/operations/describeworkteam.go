package operations

import (
"openapi/pkg/models/shared")


type DescribeWorkteamXAmzTargetEnum string

const (
    DescribeWorkteamXAmzTargetEnumSageMakerDescribeWorkteam DescribeWorkteamXAmzTargetEnum = "SageMaker.DescribeWorkteam"
)


type DescribeWorkteamHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeWorkteamXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeWorkteamRequest struct {
    Headers DescribeWorkteamHeaders 
    Request shared.DescribeWorkteamRequest `request:"mediaType=application/json"`
    
}

type DescribeWorkteamResponse struct {
    ContentType string 
    DescribeWorkteamResponse *shared.DescribeWorkteamResponse 
    StatusCode int64 
    
}

