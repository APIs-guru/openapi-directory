package operations

import (
	"openapi/pkg/models/shared"
)

type GetV3ImagesIDDownloadhistoryPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetV3ImagesIDDownloadhistoryQueryParams struct {
	CompanyDownloads *bool `queryParam:"style=form,explode=true,name=company_downloads"`
}

type GetV3ImagesIDDownloadhistoryHeaders struct {
	AcceptLanguage *string `header:"style=simple,explode=false,name=Accept-Language"`
}

type GetV3ImagesIDDownloadhistoryRequest struct {
	PathParams  GetV3ImagesIDDownloadhistoryPathParams
	QueryParams GetV3ImagesIDDownloadhistoryQueryParams
	Headers     GetV3ImagesIDDownloadhistoryHeaders
}

type GetV3ImagesIDDownloadhistoryResponse struct {
	AssetDownloadHistoryResults *shared.AssetDownloadHistoryResults
	ContentType                 string
	StatusCode                  int64
}
