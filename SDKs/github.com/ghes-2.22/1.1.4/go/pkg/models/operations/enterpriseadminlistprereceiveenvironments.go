package operations

import (
"openapi/pkg/models/shared")


type EnterpriseAdminListPreReceiveEnvironmentsSortEnum string

const (
    EnterpriseAdminListPreReceiveEnvironmentsSortEnumCreated EnterpriseAdminListPreReceiveEnvironmentsSortEnum = "created"
EnterpriseAdminListPreReceiveEnvironmentsSortEnumUpdated EnterpriseAdminListPreReceiveEnvironmentsSortEnum = "updated"
EnterpriseAdminListPreReceiveEnvironmentsSortEnumName EnterpriseAdminListPreReceiveEnvironmentsSortEnum = "name"
)


type EnterpriseAdminListPreReceiveEnvironmentsQueryParams struct {
    Direction *shared.DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *EnterpriseAdminListPreReceiveEnvironmentsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type EnterpriseAdminListPreReceiveEnvironmentsRequest struct {
    QueryParams EnterpriseAdminListPreReceiveEnvironmentsQueryParams 
    
}

type EnterpriseAdminListPreReceiveEnvironmentsResponse struct {
    ContentType string 
    StatusCode int64 
    PreReceiveEnvironments []shared.PreReceiveEnvironment 
    
}

