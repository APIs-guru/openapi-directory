package operations

import (
"openapi/pkg/models/shared")

type TwilioMessagePostTwilioPostHeaders struct {
    Authorization *string `header:"style=simple,explode=false,name=authorization"`
    
}

type TwilioMessagePostTwilioPostRequest struct {
    Headers TwilioMessagePostTwilioPostHeaders 
    Request shared.TwilioMessageRequest `request:"mediaType=application/json"`
    
}

type TwilioMessagePostTwilioPostResponse struct {
    ContentType string 
    HTTPValidationError *shared.HTTPValidationError 
    StatusCode int64 
    TwilioMessagePostTwilioPost200ApplicationJSONAny *interface{} 
    
}

