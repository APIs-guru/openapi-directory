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
	Accept     string  `header:"name=Accept"`
	XLimit     *int32  `header:"name=X-Limit"`
	XNextToken *string `header:"name=X-Next-Token"`
}

type GetV4LayersAsAppliedSecurityOption1 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetV4LayersAsAppliedSecurityOption2 struct {
	Oauth2AuthorizationCode shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
}

type GetV4LayersAsAppliedSecurity struct {
	Option1 *GetV4LayersAsAppliedSecurityOption1 `security:"option"`
	Option2 *GetV4LayersAsAppliedSecurityOption2 `security:"option"`
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
