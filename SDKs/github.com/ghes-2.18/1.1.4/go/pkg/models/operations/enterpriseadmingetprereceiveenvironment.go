package operations

import (
"openapi/pkg/models/shared")

type EnterpriseAdminGetPreReceiveEnvironmentPathParams struct {
    PreReceiveEnvironmentID int64 `pathParam:"style=simple,explode=false,name=pre_receive_environment_id"`
    
}

type EnterpriseAdminGetPreReceiveEnvironmentRequest struct {
    PathParams EnterpriseAdminGetPreReceiveEnvironmentPathParams 
    
}

type EnterpriseAdminGetPreReceiveEnvironmentResponse struct {
    ContentType string 
    StatusCode int64 
    PreReceiveEnvironment *shared.PreReceiveEnvironment 
    
}

