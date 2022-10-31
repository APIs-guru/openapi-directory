package operations

import (
"openapi/pkg/models/shared")

type GetChangedStateListResponse struct {
    AgentStates []shared.AgentState 
    ContentType string 
    StatusCode int64 
    
}

