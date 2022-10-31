package operations

import (
	"openapi/pkg/models/shared"
)

type GetPrivilegesSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetPrivilegesRequest struct {
	Security GetPrivilegesSecurity
}

type GetPrivilegesResponse struct {
	ContentType       string
	SellingPrivileges *shared.SellingPrivileges
	StatusCode        int64
}
