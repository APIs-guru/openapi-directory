package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetV4LayersAsPlantedQueryParams struct {
	OccurredAfter   *time.Time `queryParam:"style=form,explode=true,name=occurredAfter"`
	OccurredBefore  *time.Time `queryParam:"style=form,explode=true,name=occurredBefore"`
	ResourceOwnerID *string    `queryParam:"style=form,explode=true,name=resourceOwnerId"`
	UpdatedAfter    *time.Time `queryParam:"style=form,explode=true,name=updatedAfter"`
}

type GetV4LayersAsPlantedHeaders struct {
	Accept     string  `header:"name=Accept"`
	XLimit     *int32  `header:"name=X-Limit"`
	XNextToken *string `header:"name=X-Next-Token"`
}

type GetV4LayersAsPlantedSecurityOption1 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetV4LayersAsPlantedSecurityOption2 struct {
	Oauth2AuthorizationCode shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
}

type GetV4LayersAsPlantedSecurity struct {
	Option1 *GetV4LayersAsPlantedSecurityOption1 `security:"option"`
	Option2 *GetV4LayersAsPlantedSecurityOption2 `security:"option"`
}

type GetV4LayersAsPlantedRequest struct {
	QueryParams GetV4LayersAsPlantedQueryParams
	Headers     GetV4LayersAsPlantedHeaders
	Security    GetV4LayersAsPlantedSecurity
}

type GetV4LayersAsPlantedResponse struct {
	ContentType        string
	Empty              map[string]interface{}
	Error              *shared.Error
	Headers            map[string][]string
	PlantingActivities *interface{}
	StatusCode         int64
}
