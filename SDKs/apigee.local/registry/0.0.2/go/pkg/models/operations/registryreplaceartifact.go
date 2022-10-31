package operations



type RegistryReplaceArtifactPathParams struct {
    Artifact string `pathParam:"style=simple,explode=false,name=artifact"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}

type RegistryReplaceArtifactRequest struct {
    PathParams RegistryReplaceArtifactPathParams 
    Request interface{} `request:"mediaType=application/json"`
    
}

type RegistryReplaceArtifactResponse struct {
    Artifact *interface{} 
    ContentType string 
    StatusCode int64 
    
}

