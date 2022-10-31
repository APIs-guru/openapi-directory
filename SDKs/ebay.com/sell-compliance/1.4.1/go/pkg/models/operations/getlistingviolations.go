package operations

import (
	"openapi/pkg/models/shared"
)

type GetListingViolationsQueryParams struct {
	ComplianceType *string `queryParam:"style=form,explode=true,name=compliance_type"`
	Filter         *string `queryParam:"style=form,explode=true,name=filter"`
	Limit          *string `queryParam:"style=form,explode=true,name=limit"`
	ListingID      *string `queryParam:"style=form,explode=true,name=listing_id"`
	Offset         *string `queryParam:"style=form,explode=true,name=offset"`
}

type GetListingViolationsHeaders struct {
	XEbayCMarketplaceID string `header:"style=simple,explode=false,name=X-EBAY-C-MARKETPLACE-ID"`
}

type GetListingViolationsSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetListingViolationsRequest struct {
	QueryParams GetListingViolationsQueryParams
	Headers     GetListingViolationsHeaders
	Security    GetListingViolationsSecurity
}

type GetListingViolationsResponse struct {
	ContentType                        string
	PagedComplianceViolationCollection *shared.PagedComplianceViolationCollection
	StatusCode                         int64
}
