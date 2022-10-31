package operations

import (
	"openapi/pkg/models/shared"
)

type BillingGetSharedStorageBillingOrgPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type BillingGetSharedStorageBillingOrgRequest struct {
	PathParams BillingGetSharedStorageBillingOrgPathParams
}

type BillingGetSharedStorageBillingOrgResponse struct {
	ContentType          string
	StatusCode           int64
	CombinedBillingUsage *shared.CombinedBillingUsage
}
