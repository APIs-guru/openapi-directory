package operations

import (
	"openapi/pkg/models/shared"
)

type GetV3CollectionsHeaders struct {
	AcceptLanguage *string `header:"style=simple,explode=false,name=Accept-Language"`
}

type GetV3CollectionsRequest struct {
	Headers GetV3CollectionsHeaders
}

type GetV3CollectionsResponse struct {
	CollectionsList *shared.CollectionsList
	ContentType     string
	StatusCode      int64
}
