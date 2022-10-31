package operations

import (
	"openapi/pkg/models/shared"
)

type PostV3DownloadsVideosIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostV3DownloadsVideosIDQueryParams struct {
	AutoDownload   *bool   `queryParam:"style=form,explode=true,name=auto_download"`
	ProductID      *int32  `queryParam:"style=form,explode=true,name=product_id"`
	Size           *string `queryParam:"style=form,explode=true,name=size"`
	UseTeamCredits *bool   `queryParam:"style=form,explode=true,name=use_team_credits"`
}

type PostV3DownloadsVideosIDHeaders struct {
	AcceptLanguage *string `header:"style=simple,explode=false,name=Accept-Language"`
}

type PostV3DownloadsVideosIDRequests struct {
	PremiumAccessDownloadData  *shared.PremiumAccessDownloadData `request:"mediaType=application/*+json"`
	PremiumAccessDownloadData1 *shared.PremiumAccessDownloadData `request:"mediaType=application/json"`
	PremiumAccessDownloadData2 *shared.PremiumAccessDownloadData `request:"mediaType=application/json-patch+json"`
	PremiumAccessDownloadData3 *shared.PremiumAccessDownloadData `request:"mediaType=text/json"`
}

type PostV3DownloadsVideosIDRequest struct {
	PathParams  PostV3DownloadsVideosIDPathParams
	QueryParams PostV3DownloadsVideosIDQueryParams
	Headers     PostV3DownloadsVideosIDHeaders
	Request     *PostV3DownloadsVideosIDRequests
}

type PostV3DownloadsVideosIDResponse struct {
	ContentType string
	StatusCode  int64
}
