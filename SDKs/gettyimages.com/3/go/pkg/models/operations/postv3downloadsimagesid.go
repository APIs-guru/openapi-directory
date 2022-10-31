package operations

import (
	"openapi/pkg/models/shared"
)

type PostV3DownloadsImagesIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostV3DownloadsImagesIDQueryParams struct {
	AutoDownload   *bool                          `queryParam:"style=form,explode=true,name=auto_download"`
	FileType       *shared.DownloadFileTypeEnum   `queryParam:"style=form,explode=true,name=file_type"`
	Height         *string                        `queryParam:"style=form,explode=true,name=height"`
	ProductID      *int32                         `queryParam:"style=form,explode=true,name=product_id"`
	ProductType    *shared.ProductTypeRequestEnum `queryParam:"style=form,explode=true,name=product_type"`
	UseTeamCredits *bool                          `queryParam:"style=form,explode=true,name=use_team_credits"`
}

type PostV3DownloadsImagesIDHeaders struct {
	AcceptLanguage *string `header:"style=simple,explode=false,name=Accept-Language"`
}

type PostV3DownloadsImagesIDRequests struct {
	PremiumAccessDownloadData  *shared.PremiumAccessDownloadData `request:"mediaType=application/*+json"`
	PremiumAccessDownloadData1 *shared.PremiumAccessDownloadData `request:"mediaType=application/json"`
	PremiumAccessDownloadData2 *shared.PremiumAccessDownloadData `request:"mediaType=application/json-patch+json"`
	PremiumAccessDownloadData3 *shared.PremiumAccessDownloadData `request:"mediaType=text/json"`
}

type PostV3DownloadsImagesIDRequest struct {
	PathParams  PostV3DownloadsImagesIDPathParams
	QueryParams PostV3DownloadsImagesIDQueryParams
	Headers     PostV3DownloadsImagesIDHeaders
	Request     *PostV3DownloadsImagesIDRequests
}

type PostV3DownloadsImagesIDResponse struct {
	ContentType string
	StatusCode  int64
}
