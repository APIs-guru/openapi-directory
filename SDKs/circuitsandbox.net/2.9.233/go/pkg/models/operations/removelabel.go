package operations

import (
"openapi/pkg/models/shared")

type RemoveLabelPathParams struct {
    LabelID string `pathParam:"style=simple,explode=false,name=labelId"`
    
}

type RemoveLabelSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type RemoveLabelRequest struct {
    PathParams RemoveLabelPathParams 
    Security RemoveLabelSecurity 
    
}

type RemoveLabelResponse struct {
    Body []byte 
    ContentType string 
    Label *interface{} 
    StatusCode int64 
    
}

