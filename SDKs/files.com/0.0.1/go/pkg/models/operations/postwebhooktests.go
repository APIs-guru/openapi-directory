package operations

import (
"openapi/pkg/models/shared")

type PostWebhookTestsRequestBody struct {
    Action *string `multipartForm:"name=action"`
    Body map[string]interface{} `multipartForm:"name=body,json"`
    Encoding *string `multipartForm:"name=encoding"`
    FileAsBody *bool `multipartForm:"name=file_as_body"`
    FileFormField *string `multipartForm:"name=file_form_field"`
    Headers map[string]interface{} `multipartForm:"name=headers,json"`
    Method *string `multipartForm:"name=method"`
    RawBody *string `multipartForm:"name=raw_body"`
    URL string `multipartForm:"name=url"`
    
}

type PostWebhookTestsRequest struct {
    Request PostWebhookTestsRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PostWebhookTestsResponse struct {
    ContentType string 
    StatusCode int64 
    WebhookTestEntity *shared.WebhookTestEntity 
    
}

