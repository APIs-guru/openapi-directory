package operations

import (
"openapi/pkg/models/shared")

type UpdateFolderPathParams struct {
    FolderID int64 `pathParam:"style=simple,explode=false,name=folder_id"`
    
}

type UpdateFolderHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
    
}

type UpdateFolderRequest struct {
    PathParams UpdateFolderPathParams 
    Headers UpdateFolderHeaders 
    Request shared.UpdateFolderRequest `request:"mediaType=application/json"`
    
}

type UpdateFolderResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    Node *shared.Node 
    StatusCode int64 
    
}

