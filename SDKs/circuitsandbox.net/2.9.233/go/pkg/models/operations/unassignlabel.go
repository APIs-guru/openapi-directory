package operations

import (
"openapi/pkg/models/shared")

type UnassignLabelPathParams struct {
    ConvID string `pathParam:"style=simple,explode=false,name=convId"`
    LabelID string `pathParam:"style=simple,explode=false,name=labelId"`
    
}

type UnassignLabelSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type UnassignLabelRequest struct {
    PathParams UnassignLabelPathParams 
    Security UnassignLabelSecurity 
    
}

type UnassignLabelResponse struct {
    Body []byte 
    ContentType string 
    Label *interface{} 
    StatusCode int64 
    
}

