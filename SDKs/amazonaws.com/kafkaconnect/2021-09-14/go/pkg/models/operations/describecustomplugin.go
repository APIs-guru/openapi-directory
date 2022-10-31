package operations

import (
"openapi/pkg/models/shared")

type DescribeCustomPluginPathParams struct {
    CustomPluginArn string `pathParam:"style=simple,explode=false,name=customPluginArn"`
    
}

type DescribeCustomPluginHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeCustomPluginRequest struct {
    PathParams DescribeCustomPluginPathParams 
    Headers DescribeCustomPluginHeaders 
    
}

type DescribeCustomPluginResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    DescribeCustomPluginResponse *shared.DescribeCustomPluginResponse 
    ForbiddenException *interface{} 
    InternalServerErrorException *interface{} 
    NotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

