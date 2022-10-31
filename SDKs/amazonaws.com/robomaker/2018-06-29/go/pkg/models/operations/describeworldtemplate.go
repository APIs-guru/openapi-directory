package operations

import (
"openapi/pkg/models/shared")

type DescribeWorldTemplateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeWorldTemplateRequestBody struct {
    Template string `json:"template"`
    
}

type DescribeWorldTemplateRequest struct {
    Headers DescribeWorldTemplateHeaders 
    Request DescribeWorldTemplateRequestBody `request:"mediaType=application/json"`
    
}

type DescribeWorldTemplateResponse struct {
    ContentType string 
    DescribeWorldTemplateResponse *shared.DescribeWorldTemplateResponse 
    InternalServerException *interface{} 
    InvalidParameterException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

