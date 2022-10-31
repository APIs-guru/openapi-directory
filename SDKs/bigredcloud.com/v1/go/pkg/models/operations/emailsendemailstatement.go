package operations

import (
"openapi/pkg/models/shared")

type EmailSendEmailStatementRequest struct {
    Request shared.EmailStatementDto `request:"mediaType=application/json"`
    
}

type EmailSendEmailStatementResponse struct {
    ContentType string 
    EmailSendEmailStatement200ApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

