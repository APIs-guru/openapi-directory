package operations

import (
"openapi/pkg/models/shared")

type AssignLabelPathParams struct {
    ConvID string `pathParam:"style=simple,explode=false,name=convId"`
    
}

type AssignLabelRequestBody struct {
    Label string `form:"name=label"`
    
}

type AssignLabelSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type AssignLabelRequest struct {
    PathParams AssignLabelPathParams 
    Request AssignLabelRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security AssignLabelSecurity 
    
}

type AssignLabelResponse struct {
    Body []byte 
    ContentType string 
    Label *interface{} 
    StatusCode int64 
    
}

