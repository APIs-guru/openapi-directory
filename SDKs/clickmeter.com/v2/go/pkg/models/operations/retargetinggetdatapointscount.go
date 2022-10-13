package operations

import (
	"openapi/pkg/models/shared"
)

type RetargetingGetDatapointsCountPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type RetargetingGetDatapointsCountStatusEnum string

const (
	RetargetingGetDatapointsCountStatusEnumDeleted RetargetingGetDatapointsCountStatusEnum = "deleted"
	RetargetingGetDatapointsCountStatusEnumActive  RetargetingGetDatapointsCountStatusEnum = "active"
	RetargetingGetDatapointsCountStatusEnumPaused  RetargetingGetDatapointsCountStatusEnum = "paused"
	RetargetingGetDatapointsCountStatusEnumSpam    RetargetingGetDatapointsCountStatusEnum = "spam"
)

type RetargetingGetDatapointsCountQueryParams struct {
	CreatedAfter  *string                                  `queryParam:"style=form,explode=true,name=createdAfter"`
	CreatedBefore *string                                  `queryParam:"style=form,explode=true,name=createdBefore"`
	OnlyFavorites *bool                                    `queryParam:"style=form,explode=true,name=onlyFavorites"`
	Status        *RetargetingGetDatapointsCountStatusEnum `queryParam:"style=form,explode=true,name=status"`
	Tags          *string                                  `queryParam:"style=form,explode=true,name=tags"`
	TextSearch    *string                                  `queryParam:"style=form,explode=true,name=textSearch"`
}

type RetargetingGetDatapointsCountRequest struct {
	PathParams  RetargetingGetDatapointsCountPathParams
	QueryParams RetargetingGetDatapointsCountQueryParams
}

type RetargetingGetDatapointsCountResponse struct {
	APICoreResponsesCountResponce *shared.APICoreResponsesCountResponce
	Body                          []byte
	ContentType                   string
	StatusCode                    int64
}
