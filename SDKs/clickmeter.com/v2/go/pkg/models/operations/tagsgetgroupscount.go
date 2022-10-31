package operations

import (
	"openapi/pkg/models/shared"
)

type TagsGetGroupsCountPathParams struct {
	TagID int64 `pathParam:"style=simple,explode=false,name=tagId"`
}

type TagsGetGroupsCountStatusEnum string

const (
	TagsGetGroupsCountStatusEnumDeleted TagsGetGroupsCountStatusEnum = "deleted"
	TagsGetGroupsCountStatusEnumActive  TagsGetGroupsCountStatusEnum = "active"
)

type TagsGetGroupsCountQueryParams struct {
	CreatedAfter  *string                       `queryParam:"style=form,explode=true,name=createdAfter"`
	CreatedBefore *string                       `queryParam:"style=form,explode=true,name=createdBefore"`
	Status        *TagsGetGroupsCountStatusEnum `queryParam:"style=form,explode=true,name=status"`
	TextSearch    *string                       `queryParam:"style=form,explode=true,name=textSearch"`
}

type TagsGetGroupsCountRequest struct {
	PathParams  TagsGetGroupsCountPathParams
	QueryParams TagsGetGroupsCountQueryParams
}

type TagsGetGroupsCountResponse struct {
	APICoreResponsesCountResponce *shared.APICoreResponsesCountResponce
	Body                          []byte
	ContentType                   string
	StatusCode                    int64
}
