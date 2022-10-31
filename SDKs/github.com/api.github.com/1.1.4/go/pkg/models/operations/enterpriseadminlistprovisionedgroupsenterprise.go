package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminListProvisionedGroupsEnterprisePathParams struct {
	Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
}

type EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams struct {
	Count              *int64  `queryParam:"style=form,explode=true,name=count"`
	ExcludedAttributes *string `queryParam:"style=form,explode=true,name=excludedAttributes"`
	Filter             *string `queryParam:"style=form,explode=true,name=filter"`
	StartIndex         *int64  `queryParam:"style=form,explode=true,name=startIndex"`
}

type EnterpriseAdminListProvisionedGroupsEnterpriseRequest struct {
	PathParams  EnterpriseAdminListProvisionedGroupsEnterprisePathParams
	QueryParams EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams
}

type EnterpriseAdminListProvisionedGroupsEnterpriseResponse struct {
	ContentType             string
	StatusCode              int64
	ScimGroupListEnterprise *shared.ScimGroupListEnterprise
}
