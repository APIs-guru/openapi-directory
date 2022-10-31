package operations

import (
"openapi/pkg/models/shared")

type UpdateGoalPathParams struct {
    GoalGid string `pathParam:"style=simple,explode=false,name=goal_gid"`
    
}

type UpdateGoalQueryParams struct {
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type UpdateGoalRequestBody struct {
    Data *shared.GoalRequest `json:"data,omitempty"`
    
}

type UpdateGoalRequest struct {
    PathParams UpdateGoalPathParams 
    QueryParams UpdateGoalQueryParams 
    Request UpdateGoalRequestBody `request:"mediaType=application/json"`
    
}

type UpdateGoal200ApplicationJSON struct {
    Data *shared.GoalResponse `json:"data,omitempty"`
    
}

type UpdateGoalResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    UpdateGoal200ApplicationJSONObject *UpdateGoal200ApplicationJSON 
    
}

