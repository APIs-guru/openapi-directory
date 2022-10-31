package operations

import (
"openapi/pkg/models/shared")

type ReposDeleteCommitSignatureProtectionPathParams struct {
    Branch string `pathParam:"style=simple,explode=false,name=branch"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposDeleteCommitSignatureProtectionRequest struct {
    PathParams ReposDeleteCommitSignatureProtectionPathParams 
    
}

type ReposDeleteCommitSignatureProtectionResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}

