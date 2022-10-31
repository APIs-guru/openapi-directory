package operations

import (
"openapi/pkg/models/shared")

type GetBundleRegistrationsQueryParams struct {
    BundleID *int32 `queryParam:"style=form,explode=true,name=bundle_id"`
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    UserID *int32 `queryParam:"style=form,explode=true,name=user_id"`
    
}

type GetBundleRegistrationsRequest struct {
    QueryParams GetBundleRegistrationsQueryParams 
    
}

type GetBundleRegistrationsResponse struct {
    BundleRegistrationEntities []shared.BundleRegistrationEntity 
    ContentType string 
    StatusCode int64 
    
}

