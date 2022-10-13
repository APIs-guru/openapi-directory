package operations

import (
	"openapi/pkg/models/shared"
)

type SetItemWatchedStatusPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type SetItemWatchedStatusQueryParams struct {
	Ff       []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang     *string                   `queryParam:"style=form,explode=true,name=lang"`
	Position int32                     `queryParam:"style=form,explode=true,name=position"`
}

type SetItemWatchedStatusSecurity struct {
	ProfileAuth shared.SchemeProfileAuth `security:"scheme,type=oauth2"`
}

type SetItemWatchedStatusRequest struct {
	PathParams  SetItemWatchedStatusPathParams
	QueryParams SetItemWatchedStatusQueryParams
	Security    SetItemWatchedStatusSecurity
}

type SetItemWatchedStatusResponse struct {
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
	Watched      *shared.Watched
}
