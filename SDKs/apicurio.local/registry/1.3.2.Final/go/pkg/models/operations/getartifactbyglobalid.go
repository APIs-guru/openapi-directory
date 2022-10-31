package operations



type GetArtifactByGlobalIDPathParams struct {
    GlobalID int64 `pathParam:"style=simple,explode=false,name=globalId"`
    
}

type GetArtifactByGlobalIDRequest struct {
    PathParams GetArtifactByGlobalIDPathParams 
    
}

type GetArtifactByGlobalIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

