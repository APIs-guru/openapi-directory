package operations

import (
"openapi/pkg/models/shared")

type DescribeConnectorPathParams struct {
    ConnectorArn string `pathParam:"style=simple,explode=false,name=connectorArn"`
    
}

type DescribeConnectorHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeConnectorRequest struct {
    PathParams DescribeConnectorPathParams 
    Headers DescribeConnectorHeaders 
    
}

type DescribeConnectorResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    DescribeConnectorResponse *shared.DescribeConnectorResponse 
    ForbiddenException *interface{} 
    InternalServerErrorException *interface{} 
    NotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

