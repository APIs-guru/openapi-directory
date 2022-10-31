package operations

import (
"openapi/pkg/models/shared")


type EnterpriseAdminListPreReceiveHooksSortEnum string

const (
    EnterpriseAdminListPreReceiveHooksSortEnumCreated EnterpriseAdminListPreReceiveHooksSortEnum = "created"
EnterpriseAdminListPreReceiveHooksSortEnumUpdated EnterpriseAdminListPreReceiveHooksSortEnum = "updated"
EnterpriseAdminListPreReceiveHooksSortEnumName EnterpriseAdminListPreReceiveHooksSortEnum = "name"
)


type EnterpriseAdminListPreReceiveHooksQueryParams struct {
    Direction *shared.DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *EnterpriseAdminListPreReceiveHooksSortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type EnterpriseAdminListPreReceiveHooksRequest struct {
    QueryParams EnterpriseAdminListPreReceiveHooksQueryParams 
    
}

type EnterpriseAdminListPreReceiveHooksResponse struct {
    ContentType string 
    StatusCode int64 
    PreReceiveHooks []shared.PreReceiveHook 
    
}

