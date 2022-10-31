package operations

import (
"openapi/pkg/models/shared")

type AddLabelRequestBody struct {
    Label string `form:"name=label"`
    
}

type AddLabelSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type AddLabelRequest struct {
    Request AddLabelRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security AddLabelSecurity 
    
}

type AddLabelResponse struct {
    Body []byte 
    ContentType string 
    Label *interface{} 
    StatusCode int64 
    
}

