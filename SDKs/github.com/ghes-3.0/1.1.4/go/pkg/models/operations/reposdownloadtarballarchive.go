package operations



type ReposDownloadTarballArchivePathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Ref string `pathParam:"style=simple,explode=false,name=ref"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposDownloadTarballArchiveRequest struct {
    PathParams ReposDownloadTarballArchivePathParams 
    
}

type ReposDownloadTarballArchiveResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

