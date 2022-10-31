package operations

import (
	"openapi/pkg/models/shared"
)

type AccountGetPermissionsCountPathParams struct {
	GuestID int64 `pathParam:"style=simple,explode=false,name=guestId"`
}

type AccountGetPermissionsCountEntityTypeEnum string

const (
	AccountGetPermissionsCountEntityTypeEnumDatapoint AccountGetPermissionsCountEntityTypeEnum = "datapoint"
	AccountGetPermissionsCountEntityTypeEnumGroup     AccountGetPermissionsCountEntityTypeEnum = "group"
)

type AccountGetPermissionsCountTypeEnum string

const (
	AccountGetPermissionsCountTypeEnumR AccountGetPermissionsCountTypeEnum = "r"
	AccountGetPermissionsCountTypeEnumW AccountGetPermissionsCountTypeEnum = "w"
)

type AccountGetPermissionsCountQueryParams struct {
	EntityID   *int64                                    `queryParam:"style=form,explode=true,name=entityId"`
	EntityType *AccountGetPermissionsCountEntityTypeEnum `queryParam:"style=form,explode=true,name=entityType"`
	Type       *AccountGetPermissionsCountTypeEnum       `queryParam:"style=form,explode=true,name=type"`
}

type AccountGetPermissionsCountRequest struct {
	PathParams  AccountGetPermissionsCountPathParams
	QueryParams AccountGetPermissionsCountQueryParams
}

type AccountGetPermissionsCountResponse struct {
	APICoreResponsesCountResponce *shared.APICoreResponsesCountResponce
	Body                          []byte
	ContentType                   string
	StatusCode                    int64
}
