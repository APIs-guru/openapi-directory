package operations

import (
	"openapi/pkg/models/shared"
)

type ConversionsGetDatapointsPathParams struct {
	ConversionID int64 `pathParam:"style=simple,explode=false,name=conversionId"`
}

type ConversionsGetDatapointsStatusEnum string

const (
	ConversionsGetDatapointsStatusEnumDeleted ConversionsGetDatapointsStatusEnum = "deleted"
	ConversionsGetDatapointsStatusEnumActive  ConversionsGetDatapointsStatusEnum = "active"
	ConversionsGetDatapointsStatusEnumPaused  ConversionsGetDatapointsStatusEnum = "paused"
	ConversionsGetDatapointsStatusEnumSpam    ConversionsGetDatapointsStatusEnum = "spam"
)

type ConversionsGetDatapointsTypeEnum string

const (
	ConversionsGetDatapointsTypeEnumTp ConversionsGetDatapointsTypeEnum = "tp"
	ConversionsGetDatapointsTypeEnumTl ConversionsGetDatapointsTypeEnum = "tl"
)

type ConversionsGetDatapointsQueryParams struct {
	CreatedAfter  *string                             `queryParam:"style=form,explode=true,name=createdAfter"`
	CreatedBefore *string                             `queryParam:"style=form,explode=true,name=createdBefore"`
	Limit         *int32                              `queryParam:"style=form,explode=true,name=limit"`
	Offset        *int32                              `queryParam:"style=form,explode=true,name=offset"`
	Status        *ConversionsGetDatapointsStatusEnum `queryParam:"style=form,explode=true,name=status"`
	Tags          *string                             `queryParam:"style=form,explode=true,name=tags"`
	TextSearch    *string                             `queryParam:"style=form,explode=true,name=textSearch"`
	Type          *ConversionsGetDatapointsTypeEnum   `queryParam:"style=form,explode=true,name=type"`
}

type ConversionsGetDatapointsRequest struct {
	PathParams  ConversionsGetDatapointsPathParams
	QueryParams ConversionsGetDatapointsQueryParams
}

type ConversionsGetDatapointsResponse struct {
	APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64
	ContentType                                                          string
	StatusCode                                                           int64
}
