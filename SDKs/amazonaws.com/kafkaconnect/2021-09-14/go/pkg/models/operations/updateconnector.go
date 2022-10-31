package operations

import (
"openapi/pkg/models/shared")

type UpdateConnectorPathParams struct {
    ConnectorArn string `pathParam:"style=simple,explode=false,name=connectorArn"`
    
}

type UpdateConnectorQueryParams struct {
    CurrentVersion string `queryParam:"style=form,explode=true,name=currentVersion"`
    
}

type UpdateConnectorHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateConnectorRequestBodyCapacity struct {
    AutoScaling *shared.AutoScalingUpdate `json:"autoScaling,omitempty"`
    ProvisionedCapacity *shared.ProvisionedCapacityUpdate `json:"provisionedCapacity,omitempty"`
    
}

type UpdateConnectorRequestBody struct {
    Capacity UpdateConnectorRequestBodyCapacity `json:"capacity"`
    
}

type UpdateConnectorRequest struct {
    PathParams UpdateConnectorPathParams 
    QueryParams UpdateConnectorQueryParams 
    Headers UpdateConnectorHeaders 
    Request UpdateConnectorRequestBody `request:"mediaType=application/json"`
    
}

type UpdateConnectorResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    ForbiddenException *interface{} 
    InternalServerErrorException *interface{} 
    NotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    UpdateConnectorResponse *shared.UpdateConnectorResponse 
    
}

