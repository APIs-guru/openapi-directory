package operations

import (
"openapi/pkg/models/shared")

type ChangePendingAssignmentsHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type ChangePendingAssignmentsRequest struct {
    Headers ChangePendingAssignmentsHeaders 
    Request shared.PendingAssignmentsRequest `request:"mediaType=application/json"`
    
}

type ChangePendingAssignmentsResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

