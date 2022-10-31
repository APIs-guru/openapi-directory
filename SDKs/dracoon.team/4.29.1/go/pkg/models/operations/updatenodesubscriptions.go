package operations

import (
"openapi/pkg/models/shared")

type UpdateNodeSubscriptionsHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type UpdateNodeSubscriptionsRequest struct {
    Headers UpdateNodeSubscriptionsHeaders 
    Request shared.UpdateSubscriptionsBulkRequest `request:"mediaType=application/json"`
    
}

type UpdateNodeSubscriptionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

