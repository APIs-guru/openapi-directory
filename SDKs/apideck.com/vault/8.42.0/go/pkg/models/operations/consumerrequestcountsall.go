package operations

import (
	"openapi/pkg/models/shared"
)

type ConsumerRequestCountsAllPathParams struct {
	ConsumerID string `pathParam:"style=simple,explode=false,name=consumer_id"`
}

type ConsumerRequestCountsAllQueryParams struct {
	EndDatetime   string `queryParam:"style=form,explode=true,name=end_datetime"`
	StartDatetime string `queryParam:"style=form,explode=true,name=start_datetime"`
}

type ConsumerRequestCountsAllHeaders struct {
	XApideckAppID string `header:"name=x-apideck-app-id"`
}

type ConsumerRequestCountsAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ConsumerRequestCountsAllRequest struct {
	PathParams  ConsumerRequestCountsAllPathParams
	QueryParams ConsumerRequestCountsAllQueryParams
	Headers     ConsumerRequestCountsAllHeaders
	Security    ConsumerRequestCountsAllSecurity
}

type ConsumerRequestCountsAllResponse struct {
	BadRequestResponse                       *interface{}
	ConsumerRequestCountsInDateRangeResponse *shared.ConsumerRequestCountsInDateRangeResponse
	ContentType                              string
	NotFoundResponse                         *interface{}
	PaymentRequiredResponse                  *interface{}
	StatusCode                               int64
	UnauthorizedResponse                     *interface{}
	UnexpectedErrorResponse                  *interface{}
	UnprocessableResponse                    *interface{}
}
