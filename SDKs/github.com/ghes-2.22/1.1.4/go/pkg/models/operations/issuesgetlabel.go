package operations

import (
"openapi/pkg/models/shared")

type IssuesGetLabelPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type IssuesGetLabelRequest struct {
    PathParams IssuesGetLabelPathParams 
    
}

type IssuesGetLabelResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Label *shared.Label 
    
}

