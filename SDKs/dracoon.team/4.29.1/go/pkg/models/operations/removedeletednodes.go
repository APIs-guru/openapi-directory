package operations

import (
"openapi/pkg/models/shared")

type RemoveDeletedNodesHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RemoveDeletedNodesRequest struct {
    Headers RemoveDeletedNodesHeaders 
    Request shared.DeleteDeletedNodesRequest `request:"mediaType=application/json"`
    
}

type RemoveDeletedNodesResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

