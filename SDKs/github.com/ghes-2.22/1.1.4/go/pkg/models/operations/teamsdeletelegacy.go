package operations

import (
"openapi/pkg/models/shared")

type TeamsDeleteLegacyPathParams struct {
    TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
    
}

type TeamsDeleteLegacyRequest struct {
    PathParams TeamsDeleteLegacyPathParams 
    
}

type TeamsDeleteLegacyResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    ValidationError *shared.ValidationError 
    
}

