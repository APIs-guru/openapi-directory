package operations

import (
	"openapi/pkg/models/shared"
)

type PostV3AssetLicensingAssetIDPathParams struct {
	AssetID string `pathParam:"style=simple,explode=false,name=assetId"`
}

type PostV3AssetLicensingAssetIDHeaders struct {
	AcceptLanguage *string `header:"style=simple,explode=false,name=Accept-Language"`
}

type PostV3AssetLicensingAssetIDRequests struct {
	AcquireAssetLicensesRequest  *shared.AcquireAssetLicensesRequest `request:"mediaType=application/*+json"`
	AcquireAssetLicensesRequest1 *shared.AcquireAssetLicensesRequest `request:"mediaType=application/json"`
	AcquireAssetLicensesRequest2 *shared.AcquireAssetLicensesRequest `request:"mediaType=application/json-patch+json"`
	AcquireAssetLicensesRequest3 *shared.AcquireAssetLicensesRequest `request:"mediaType=text/json"`
}

type PostV3AssetLicensingAssetIDRequest struct {
	PathParams PostV3AssetLicensingAssetIDPathParams
	Headers    PostV3AssetLicensingAssetIDHeaders
	Request    *PostV3AssetLicensingAssetIDRequests
}

type PostV3AssetLicensingAssetIDResponse struct {
	AssetLicensingResponse *shared.AssetLicensingResponse
	ContentType            string
	StatusCode             int64
}
