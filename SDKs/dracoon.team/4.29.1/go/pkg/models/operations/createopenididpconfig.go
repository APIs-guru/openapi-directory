package operations

import (
"openapi/pkg/models/shared")

type CreateOpenIDIdpConfigHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type CreateOpenIDIdpConfigRequest struct {
    Headers CreateOpenIDIdpConfigHeaders 
    Request shared.CreateOpenIDIdpConfigRequest `request:"mediaType=application/json"`
    
}

type CreateOpenIDIdpConfigResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    OpenIDIdpConfig *shared.OpenIDIdpConfig 
    StatusCode int64 
    
}

