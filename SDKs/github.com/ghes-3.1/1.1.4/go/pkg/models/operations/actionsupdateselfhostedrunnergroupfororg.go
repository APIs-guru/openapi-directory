package operations

import (
"openapi/pkg/models/shared")

type ActionsUpdateSelfHostedRunnerGroupForOrgPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    RunnerGroupID int64 `pathParam:"style=simple,explode=false,name=runner_group_id"`
    
}


type ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum string

const (
    ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnumSelected ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum = "selected"
ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnumAll ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum = "all"
ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnumPrivate ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum = "private"
)


type ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody struct {
    Name *string `json:"name,omitempty"`
    Visibility *ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum `json:"visibility,omitempty"`
    
}

type ActionsUpdateSelfHostedRunnerGroupForOrgRequest struct {
    PathParams ActionsUpdateSelfHostedRunnerGroupForOrgPathParams 
    Request *ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody `request:"mediaType=application/json"`
    
}

type ActionsUpdateSelfHostedRunnerGroupForOrgResponse struct {
    ContentType string 
    StatusCode int64 
    RunnerGroupsOrg *shared.RunnerGroupsOrg 
    
}

