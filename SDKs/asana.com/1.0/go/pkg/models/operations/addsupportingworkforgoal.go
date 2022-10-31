package operations

import (
"openapi/pkg/models/shared")

type AddSupportingWorkForGoalPathParams struct {
    GoalGid string `pathParam:"style=simple,explode=false,name=goal_gid"`
    
}

type AddSupportingWorkForGoalQueryParams struct {
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type AddSupportingWorkForGoalRequestBody struct {
    Data *shared.GoalAddSupportingWorkRequest `json:"data,omitempty"`
    
}

type AddSupportingWorkForGoalRequest struct {
    PathParams AddSupportingWorkForGoalPathParams 
    QueryParams AddSupportingWorkForGoalQueryParams 
    Request AddSupportingWorkForGoalRequestBody `request:"mediaType=application/json"`
    
}

type AddSupportingWorkForGoal200ApplicationJSON struct {
    Data map[string]interface{} `json:"data,omitempty"`
    
}

type AddSupportingWorkForGoalResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    AddSupportingWorkForGoal200ApplicationJSONObject *AddSupportingWorkForGoal200ApplicationJSON 
    
}

