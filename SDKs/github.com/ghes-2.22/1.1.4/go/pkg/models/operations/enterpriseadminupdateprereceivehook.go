package operations

import (
"openapi/pkg/models/shared")

type EnterpriseAdminUpdatePreReceiveHookPathParams struct {
    PreReceiveHookID int64 `pathParam:"style=simple,explode=false,name=pre_receive_hook_id"`
    
}

type EnterpriseAdminUpdatePreReceiveHookRequestBody struct {
    AllowDownstreamConfiguration *bool `json:"allow_downstream_configuration,omitempty"`
    Enforcement *string `json:"enforcement,omitempty"`
    Environment map[string]interface{} `json:"environment,omitempty"`
    Name *string `json:"name,omitempty"`
    Script *string `json:"script,omitempty"`
    ScriptRepository map[string]interface{} `json:"script_repository,omitempty"`
    
}

type EnterpriseAdminUpdatePreReceiveHookRequest struct {
    PathParams EnterpriseAdminUpdatePreReceiveHookPathParams 
    Request *EnterpriseAdminUpdatePreReceiveHookRequestBody `request:"mediaType=application/json"`
    
}

type EnterpriseAdminUpdatePreReceiveHookResponse struct {
    ContentType string 
    StatusCode int64 
    PreReceiveHook *shared.PreReceiveHook 
    
}

