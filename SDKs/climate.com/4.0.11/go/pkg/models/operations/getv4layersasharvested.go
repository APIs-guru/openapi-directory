package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetV4LayersAsHarvestedQueryParams struct {
	OccurredAfter   *time.Time `queryParam:"style=form,explode=true,name=occurredAfter"`
	OccurredBefore  *time.Time `queryParam:"style=form,explode=true,name=occurredBefore"`
	ResourceOwnerID *string    `queryParam:"style=form,explode=true,name=resourceOwnerId"`
	UpdatedAfter    *time.Time `queryParam:"style=form,explode=true,name=updatedAfter"`
}

type GetV4LayersAsHarvestedHeaders struct {
	Accept     string  `header:"name=Accept"`
	XLimit     *int32  `header:"name=X-Limit"`
	XNextToken *string `header:"name=X-Next-Token"`
}

type GetV4LayersAsHarvestedSecurityOption1 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetV4LayersAsHarvestedSecurityOption2 struct {
	Oauth2AuthorizationCode shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
}

type GetV4LayersAsHarvestedSecurity struct {
	Option1 *GetV4LayersAsHarvestedSecurityOption1 `security:"option"`
	Option2 *GetV4LayersAsHarvestedSecurityOption2 `security:"option"`
}

type GetV4LayersAsHarvestedRequest struct {
	QueryParams GetV4LayersAsHarvestedQueryParams
	Headers     GetV4LayersAsHarvestedHeaders
	Security    GetV4LayersAsHarvestedSecurity
}

type GetV4LayersAsHarvestedResponse struct {
	ContentType       string
	Empty             map[string]interface{}
	Error             *shared.Error
	HarvestActivities *interface{}
	Headers           map[string][]string
	StatusCode        int64
}
