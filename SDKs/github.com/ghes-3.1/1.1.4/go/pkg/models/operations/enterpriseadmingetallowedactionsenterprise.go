package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminGetAllowedActionsEnterprisePathParams struct {
	Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
}

type EnterpriseAdminGetAllowedActionsEnterpriseRequest struct {
	PathParams EnterpriseAdminGetAllowedActionsEnterprisePathParams
}

type EnterpriseAdminGetAllowedActionsEnterpriseResponse struct {
	ContentType     string
	StatusCode      int64
	SelectedActions *shared.SelectedActions
}
