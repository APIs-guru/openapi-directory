package operations

import (
"time"
"openapi/pkg/models/shared")

type PostBundlesRequestBody struct {
    ClickwrapID *int32 `multipartForm:"name=clickwrap_id"`
    Code *string `multipartForm:"name=code"`
    Description *string `multipartForm:"name=description"`
    ExpiresAt *time.Time `multipartForm:"name=expires_at"`
    FormFieldSetID *int32 `multipartForm:"name=form_field_set_id"`
    InboxID *int32 `multipartForm:"name=inbox_id"`
    MaxUses *int32 `multipartForm:"name=max_uses"`
    Note *string `multipartForm:"name=note"`
    Password *string `multipartForm:"name=password"`
    Paths []string `multipartForm:"name=paths"`
    PreviewOnly *bool `multipartForm:"name=preview_only"`
    RequireRegistration *bool `multipartForm:"name=require_registration"`
    RequireShareRecipient *bool `multipartForm:"name=require_share_recipient"`
    UserID *int32 `multipartForm:"name=user_id"`
    
}

type PostBundlesRequest struct {
    Request *PostBundlesRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PostBundlesResponse struct {
    BundleEntity *shared.BundleEntity 
    ContentType string 
    StatusCode int64 
    
}

