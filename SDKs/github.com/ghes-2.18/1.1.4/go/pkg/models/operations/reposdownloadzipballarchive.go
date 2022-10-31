package operations



type ReposDownloadZipballArchivePathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Ref string `pathParam:"style=simple,explode=false,name=ref"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposDownloadZipballArchiveRequest struct {
    PathParams ReposDownloadZipballArchivePathParams 
    
}

type ReposDownloadZipballArchiveResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

