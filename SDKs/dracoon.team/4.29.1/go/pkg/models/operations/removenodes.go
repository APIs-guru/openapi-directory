package operations

import (
"openapi/pkg/models/shared")

type RemoveNodesHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RemoveNodesRequest struct {
    Headers RemoveNodesHeaders 
    Request shared.DeleteNodesRequest `request:"mediaType=application/json"`
    
}

type RemoveNodesResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

