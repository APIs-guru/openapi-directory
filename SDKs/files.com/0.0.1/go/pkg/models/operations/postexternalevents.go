package operations

import (
"openapi/pkg/models/shared")


type PostExternalEventsRequestBodyStatusEnum string

const (
    PostExternalEventsRequestBodyStatusEnumSuccess PostExternalEventsRequestBodyStatusEnum = "success"
PostExternalEventsRequestBodyStatusEnumError PostExternalEventsRequestBodyStatusEnum = "error"
PostExternalEventsRequestBodyStatusEnumPartialFailure PostExternalEventsRequestBodyStatusEnum = "partial_failure"
)


type PostExternalEventsRequestBody struct {
    Body string `multipartForm:"name=body"`
    Status PostExternalEventsRequestBodyStatusEnum `multipartForm:"name=status"`
    
}

type PostExternalEventsRequest struct {
    Request PostExternalEventsRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PostExternalEventsResponse struct {
    ContentType string 
    ExternalEventEntity *shared.ExternalEventEntity 
    StatusCode int64 
    
}

