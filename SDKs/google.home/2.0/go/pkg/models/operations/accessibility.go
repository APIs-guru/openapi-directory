package operations

import (
"openapi/pkg/models/shared")

type AccessibilityRequest struct {
    Request shared.AccessibilityRequest `request:"mediaType=application/json"`
    
}

type AccessibilityResponse struct {
    ContentType string 
    Getcurrentvalues *shared.Getcurrentvalues 
    StatusCode int64 
    
}

