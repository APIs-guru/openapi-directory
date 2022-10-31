package operations

import (
"openapi/pkg/models/shared")


type DescribeRecipeXAmzTargetEnum string

const (
    DescribeRecipeXAmzTargetEnumAmazonPersonalizeDescribeRecipe DescribeRecipeXAmzTargetEnum = "AmazonPersonalize.DescribeRecipe"
)


type DescribeRecipeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeRecipeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeRecipeRequest struct {
    Headers DescribeRecipeHeaders 
    Request shared.DescribeRecipeRequest `request:"mediaType=application/json"`
    
}

type DescribeRecipeResponse struct {
    ContentType string 
    DescribeRecipeResponse *shared.DescribeRecipeResponse 
    InvalidInputException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

