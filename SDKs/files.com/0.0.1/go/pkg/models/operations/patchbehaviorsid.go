package operations

import (
"openapi/pkg/models/shared")

type PatchBehaviorsIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PatchBehaviorsIDRequestBodyAttachmentFile struct {
    AttachmentFile string `multipartForm:"name=attachment_file"`
    Content []byte `multipartForm:"content"`
    
}

type PatchBehaviorsIDRequestBody struct {
    AttachmentFile *PatchBehaviorsIDRequestBodyAttachmentFile `multipartForm:"file"`
    Behavior *string `multipartForm:"name=behavior"`
    Path *string `multipartForm:"name=path"`
    Value *string `multipartForm:"name=value"`
    
}

type PatchBehaviorsIDRequest struct {
    PathParams PatchBehaviorsIDPathParams 
    Request *PatchBehaviorsIDRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PatchBehaviorsIDResponse struct {
    BehaviorEntity *shared.BehaviorEntity 
    ContentType string 
    StatusCode int64 
    
}

