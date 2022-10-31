package operations

import (
	"openapi/pkg/models/shared"
)

type BillingGetSharedStorageBillingGhePathParams struct {
	Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
}

type BillingGetSharedStorageBillingGheRequest struct {
	PathParams BillingGetSharedStorageBillingGhePathParams
}

type BillingGetSharedStorageBillingGheResponse struct {
	ContentType          string
	StatusCode           int64
	CombinedBillingUsage *shared.CombinedBillingUsage
}
