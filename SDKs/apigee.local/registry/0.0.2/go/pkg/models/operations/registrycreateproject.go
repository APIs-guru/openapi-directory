package operations



type RegistryCreateProjectQueryParams struct {
    ProjectID *string `queryParam:"style=form,explode=true,name=project_id"`
    
}

type RegistryCreateProjectRequest struct {
    QueryParams RegistryCreateProjectQueryParams 
    Request interface{} `request:"mediaType=application/json"`
    
}

type RegistryCreateProjectResponse struct {
    ContentType string 
    Project *interface{} 
    StatusCode int64 
    
}

