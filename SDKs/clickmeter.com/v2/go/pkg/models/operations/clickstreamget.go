package operations

import (
	"openapi/pkg/models/shared"
)

type ClickStreamGetFilterEnum string

const (
	ClickStreamGetFilterEnumUnknown     ClickStreamGetFilterEnum = ""
	ClickStreamGetFilterEnumSpiders     ClickStreamGetFilterEnum = "spiders"
	ClickStreamGetFilterEnumUniques     ClickStreamGetFilterEnum = "uniques"
	ClickStreamGetFilterEnumNonuniques  ClickStreamGetFilterEnum = "nonuniques"
	ClickStreamGetFilterEnumConversions ClickStreamGetFilterEnum = "conversions"
)

type ClickStreamGetQueryParams struct {
	Conversion *int64                    `queryParam:"style=form,explode=true,name=conversion"`
	Datapoint  *int64                    `queryParam:"style=form,explode=true,name=datapoint"`
	Filter     *ClickStreamGetFilterEnum `queryParam:"style=form,explode=true,name=filter"`
	Group      *int64                    `queryParam:"style=form,explode=true,name=group"`
	PageSize   *int32                    `queryParam:"style=form,explode=true,name=pageSize"`
}

type ClickStreamGetRequest struct {
	QueryParams ClickStreamGetQueryParams
}

type ClickStreamGetResponse struct {
	APICoreResponsesEntitiesResponseAPICoreDtoClickStreamHit *shared.APICoreResponsesEntitiesResponseAPICoreDtoClickStreamHit
	ContentType                                              string
	StatusCode                                               int64
}
