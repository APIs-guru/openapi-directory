package operations

import (
"openapi/pkg/models/shared")

type EnterpriseAdminGetSelfHostedRunnerForEnterprisePathParams struct {
    Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
    RunnerID int64 `pathParam:"style=simple,explode=false,name=runner_id"`
    
}

type EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequest struct {
    PathParams EnterpriseAdminGetSelfHostedRunnerForEnterprisePathParams 
    
}

type EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponse struct {
    ContentType string 
    StatusCode int64 
    Runner *shared.Runner 
    
}

