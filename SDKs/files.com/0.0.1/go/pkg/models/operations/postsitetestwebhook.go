package operations

import (
"openapi/pkg/models/shared")

type PostSiteTestWebhookRequestBody struct {
    Action *string `multipartForm:"name=action"`
    Body map[string]interface{} `multipartForm:"name=body,json"`
    Encoding *string `multipartForm:"name=encoding"`
    Headers map[string]interface{} `multipartForm:"name=headers,json"`
    Method *string `multipartForm:"name=method"`
    URL string `multipartForm:"name=url"`
    
}

type PostSiteTestWebhookRequest struct {
    Request PostSiteTestWebhookRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PostSiteTestWebhookResponse struct {
    ContentType string 
    StatusCode int64 
    StatusEntity *shared.StatusEntity 
    
}

