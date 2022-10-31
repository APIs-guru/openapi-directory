package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetV4LayersScoutingObservationsQueryParams struct {
	OccurredAfter  *time.Time `queryParam:"style=form,explode=true,name=occurredAfter"`
	OccurredBefore *time.Time `queryParam:"style=form,explode=true,name=occurredBefore"`
}

type GetV4LayersScoutingObservationsHeaders struct {
	XLimit     *int32  `header:"style=simple,explode=false,name=X-Limit"`
	XNextToken *string `header:"style=simple,explode=false,name=X-Next-Token"`
}

type GetV4LayersScoutingObservationsSecurityOption1 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetV4LayersScoutingObservationsSecurityOption2 struct {
	Oauth2AuthorizationCode shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
}

type GetV4LayersScoutingObservationsSecurity struct {
	Option1 *GetV4LayersScoutingObservationsSecurityOption1 `security:"option"`
	Option2 *GetV4LayersScoutingObservationsSecurityOption2 `security:"option"`
}

type GetV4LayersScoutingObservationsRequest struct {
	QueryParams GetV4LayersScoutingObservationsQueryParams
	Headers     GetV4LayersScoutingObservationsHeaders
	Security    GetV4LayersScoutingObservationsSecurity
}

type GetV4LayersScoutingObservationsResponse struct {
	ContentType          string
	Empty                map[string]interface{}
	Error                *shared.Error
	Headers              map[string][]string
	ScoutingObservations *interface{}
	StatusCode           int64
}
