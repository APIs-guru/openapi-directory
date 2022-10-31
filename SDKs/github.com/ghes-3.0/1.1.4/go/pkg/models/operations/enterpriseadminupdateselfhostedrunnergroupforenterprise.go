package operations

import (
"openapi/pkg/models/shared")

type EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprisePathParams struct {
    Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
    RunnerGroupID int64 `pathParam:"style=simple,explode=false,name=runner_group_id"`
    
}


type EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum string

const (
    EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnumSelected EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum = "selected"
EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnumAll EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum = "all"
)


type EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody struct {
    Name *string `json:"name,omitempty"`
    Visibility *EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum `json:"visibility,omitempty"`
    
}

type EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest struct {
    PathParams EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprisePathParams 
    Request *EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody `request:"mediaType=application/json"`
    
}

type EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse struct {
    ContentType string 
    StatusCode int64 
    RunnerGroupsEnterprise *shared.RunnerGroupsEnterprise 
    
}

