package operations

import (
"openapi/pkg/models/shared")

type ReposCreateCommitSignatureProtectionPathParams struct {
    Branch string `pathParam:"style=simple,explode=false,name=branch"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposCreateCommitSignatureProtectionRequest struct {
    PathParams ReposCreateCommitSignatureProtectionPathParams 
    
}

type ReposCreateCommitSignatureProtectionResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    ProtectedBranchAdminEnforced *shared.ProtectedBranchAdminEnforced 
    
}

