package operations

import (
"openapi/pkg/models/shared")

type PatchGroupsIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PatchGroupsIDRequestBody struct {
    AdminIds *string `multipartForm:"name=admin_ids"`
    Name *string `multipartForm:"name=name"`
    Notes *string `multipartForm:"name=notes"`
    UserIds *string `multipartForm:"name=user_ids"`
    
}

type PatchGroupsIDRequest struct {
    PathParams PatchGroupsIDPathParams 
    Request *PatchGroupsIDRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PatchGroupsIDResponse struct {
    ContentType string 
    GroupEntity *shared.GroupEntity 
    StatusCode int64 
    
}

