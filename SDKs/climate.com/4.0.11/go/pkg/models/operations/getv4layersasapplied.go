package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetV4LayersAsAppliedQueryParams struct {
	OccurredAfter   *time.Time `queryParam:"style=form,explode=true,name=occurredAfter"`
	OccurredBefore  *time.Time `queryParam:"style=form,explode=true,name=occurredBefore"`
	ResourceOwnerID *string    `queryParam:"style=form,explode=true,name=resourceOwnerId"`
	UpdatedAfter    *time.Time `queryParam:"style=form,explode=true,name=updatedAfter"`
}

type GetV4LayersAsAppliedHeaders struct {
	Accept     string  `header:"style=simple,explode=false,name=Accept"`
	XLimit     *int32  `header:"style=simple,explode=false,name=X-Limit"`
	XNextToken *string `header:"style=simple,explode=false,name=X-Next-Token"`
}

type GetV4LayersAsAppliedSecurity struct {
	APIKey                  *shared.SchemeAPIKey                  `security:"scheme,type=apiKey,subtype=header"`
	Oauth2AuthorizationCode *shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
}

type GetV4LayersAsAppliedRequest struct {
	QueryParams GetV4LayersAsAppliedQueryParams
	Headers     GetV4LayersAsAppliedHeaders
	Security    GetV4LayersAsAppliedSecurity
}

type GetV4LayersAsAppliedResponse struct {
	ApplicationActivities *interface{}
	ContentType           string
	Empty                 map[string]interface{}
	Error                 *shared.Error
	Headers               map[string][]string
	StatusCode            int64
}
