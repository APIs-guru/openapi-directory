package operations



type ActionsDownloadArtifactPathParams struct {
    ArchiveFormat string `pathParam:"style=simple,explode=false,name=archive_format"`
    ArtifactID int64 `pathParam:"style=simple,explode=false,name=artifact_id"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ActionsDownloadArtifactRequest struct {
    PathParams ActionsDownloadArtifactPathParams 
    
}

type ActionsDownloadArtifactResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

