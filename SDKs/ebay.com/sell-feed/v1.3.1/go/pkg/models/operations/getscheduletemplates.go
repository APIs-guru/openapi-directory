package operations

import (
	"openapi/pkg/models/shared"
)

type GetScheduleTemplatesQueryParams struct {
	FeedType string  `queryParam:"style=form,explode=true,name=feed_type"`
	Limit    *string `queryParam:"style=form,explode=true,name=limit"`
	Offset   *string `queryParam:"style=form,explode=true,name=offset"`
}

type GetScheduleTemplatesSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetScheduleTemplatesRequest struct {
	QueryParams GetScheduleTemplatesQueryParams
	Security    GetScheduleTemplatesSecurity
}

type GetScheduleTemplatesResponse struct {
	ContentType                string
	ScheduleTemplateCollection *shared.ScheduleTemplateCollection
	StatusCode                 int64
}
