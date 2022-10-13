package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminListProvisionedIdentitiesEnterprisePathParams struct {
	Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
}

type EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams struct {
	Count      *int64  `queryParam:"style=form,explode=true,name=count"`
	Filter     *string `queryParam:"style=form,explode=true,name=filter"`
	StartIndex *int64  `queryParam:"style=form,explode=true,name=startIndex"`
}

type EnterpriseAdminListProvisionedIdentitiesEnterpriseRequest struct {
	PathParams  EnterpriseAdminListProvisionedIdentitiesEnterprisePathParams
	QueryParams EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams
}

type EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse struct {
	ContentType            string
	StatusCode             int64
	ScimUserListEnterprise *shared.ScimUserListEnterprise
}
