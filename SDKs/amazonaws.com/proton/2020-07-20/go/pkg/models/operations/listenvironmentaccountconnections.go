package operations

import (
"openapi/pkg/models/shared")

type ListEnvironmentAccountConnectionsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type ListEnvironmentAccountConnectionsXAmzTargetEnum string

const (
    ListEnvironmentAccountConnectionsXAmzTargetEnumAwsProton20200720ListEnvironmentAccountConnections ListEnvironmentAccountConnectionsXAmzTargetEnum = "AwsProton20200720.ListEnvironmentAccountConnections"
)


type ListEnvironmentAccountConnectionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListEnvironmentAccountConnectionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListEnvironmentAccountConnectionsRequest struct {
    QueryParams ListEnvironmentAccountConnectionsQueryParams 
    Headers ListEnvironmentAccountConnectionsHeaders 
    Request shared.ListEnvironmentAccountConnectionsInput `request:"mediaType=application/json"`
    
}

type ListEnvironmentAccountConnectionsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListEnvironmentAccountConnectionsOutput *shared.ListEnvironmentAccountConnectionsOutput 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

