package operations

import (
"openapi/pkg/models/shared")


type DescribeFeatureTransformationXAmzTargetEnum string

const (
    DescribeFeatureTransformationXAmzTargetEnumAmazonPersonalizeDescribeFeatureTransformation DescribeFeatureTransformationXAmzTargetEnum = "AmazonPersonalize.DescribeFeatureTransformation"
)


type DescribeFeatureTransformationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeFeatureTransformationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeFeatureTransformationRequest struct {
    Headers DescribeFeatureTransformationHeaders 
    Request shared.DescribeFeatureTransformationRequest `request:"mediaType=application/json"`
    
}

type DescribeFeatureTransformationResponse struct {
    ContentType string 
    DescribeFeatureTransformationResponse *shared.DescribeFeatureTransformationResponse 
    InvalidInputException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

