package operations

import (
"openapi/pkg/models/shared")

type PutEventsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzClientContext string `header:"style=simple,explode=false,name=x-amz-Client-Context"`
    XAmzClientContextEncoding *string `header:"style=simple,explode=false,name=x-amz-Client-Context-Encoding"`
    
}

type PutEventsRequestBody struct {
    Events []shared.Event `json:"events"`
    
}

type PutEventsRequest struct {
    Headers PutEventsHeaders 
    Request PutEventsRequestBody `request:"mediaType=application/json"`
    
}

type PutEventsResponse struct {
    BadRequestException *shared.BadRequestException 
    ContentType string 
    StatusCode int64 
    
}

