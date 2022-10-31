package operations

import (
"openapi/pkg/models/shared")

type ProjectsRemoveCollaboratorPathParams struct {
    ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type ProjectsRemoveCollaboratorRequest struct {
    PathParams ProjectsRemoveCollaboratorPathParams 
    
}

type ProjectsRemoveCollaborator415ApplicationJSON struct {
    DocumentationURL string `json:"documentation_url"`
    Message string `json:"message"`
    
}

type ProjectsRemoveCollaboratorResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    ProjectsRemoveCollaborator415ApplicationJSONObject *ProjectsRemoveCollaborator415ApplicationJSON 
    ValidationError *shared.ValidationError 
    
}

