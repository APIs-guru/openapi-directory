package operations

import (
	"openapi/pkg/models/shared"
)

type GetListingViolationsSummaryQueryParams struct {
	ComplianceType *string `queryParam:"style=form,explode=true,name=compliance_type"`
}

type GetListingViolationsSummaryHeaders struct {
	XEbayCMarketplaceID *string `header:"style=simple,explode=false,name=X-EBAY-C-MARKETPLACE-ID"`
}

type GetListingViolationsSummarySecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetListingViolationsSummaryRequest struct {
	QueryParams GetListingViolationsSummaryQueryParams
	Headers     GetListingViolationsSummaryHeaders
	Security    GetListingViolationsSummarySecurity
}

type GetListingViolationsSummaryResponse struct {
	ComplianceSummary *shared.ComplianceSummary
	ContentType       string
	StatusCode        int64
}
