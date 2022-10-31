package operations

import (
	"openapi/pkg/models/shared"
)

type GetV3VideosIDDownloadhistoryPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetV3VideosIDDownloadhistoryQueryParams struct {
	CompanyDownloads *bool `queryParam:"style=form,explode=true,name=company_downloads"`
}

type GetV3VideosIDDownloadhistoryHeaders struct {
	AcceptLanguage *string `header:"style=simple,explode=false,name=Accept-Language"`
}

type GetV3VideosIDDownloadhistoryRequest struct {
	PathParams  GetV3VideosIDDownloadhistoryPathParams
	QueryParams GetV3VideosIDDownloadhistoryQueryParams
	Headers     GetV3VideosIDDownloadhistoryHeaders
}

type GetV3VideosIDDownloadhistoryResponse struct {
	AssetDownloadHistoryResults *shared.AssetDownloadHistoryResults
	ContentType                 string
	StatusCode                  int64
}
