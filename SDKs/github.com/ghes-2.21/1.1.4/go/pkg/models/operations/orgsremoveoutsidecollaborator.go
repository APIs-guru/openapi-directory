package operations



type OrgsRemoveOutsideCollaboratorPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type OrgsRemoveOutsideCollaboratorRequest struct {
    PathParams OrgsRemoveOutsideCollaboratorPathParams 
    
}

type OrgsRemoveOutsideCollaborator422ApplicationJSON struct {
    DocumentationURL *string `json:"documentation_url,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type OrgsRemoveOutsideCollaboratorResponse struct {
    ContentType string 
    StatusCode int64 
    OrgsRemoveOutsideCollaborator422ApplicationJSONObject *OrgsRemoveOutsideCollaborator422ApplicationJSON 
    
}

