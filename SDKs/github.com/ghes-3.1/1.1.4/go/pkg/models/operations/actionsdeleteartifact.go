package operations



type ActionsDeleteArtifactPathParams struct {
    ArtifactID int64 `pathParam:"style=simple,explode=false,name=artifact_id"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ActionsDeleteArtifactRequest struct {
    PathParams ActionsDeleteArtifactPathParams 
    
}

type ActionsDeleteArtifactResponse struct {
    ContentType string 
    StatusCode int64 
    
}

