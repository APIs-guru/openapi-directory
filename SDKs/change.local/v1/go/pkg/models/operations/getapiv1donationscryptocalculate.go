package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIV1DonationsCryptoCalculateCurrencyEnum string

const (
	GetAPIV1DonationsCryptoCalculateCurrencyEnumEth GetAPIV1DonationsCryptoCalculateCurrencyEnum = "eth"
	GetAPIV1DonationsCryptoCalculateCurrencyEnumBtc GetAPIV1DonationsCryptoCalculateCurrencyEnum = "btc"
)

type GetAPIV1DonationsCryptoCalculateQueryParams struct {
	Count    *float64                                     `queryParam:"style=form,explode=true,name=count"`
	Currency GetAPIV1DonationsCryptoCalculateCurrencyEnum `queryParam:"style=form,explode=true,name=currency"`
}

type GetAPIV1DonationsCryptoCalculateSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type GetAPIV1DonationsCryptoCalculateRequest struct {
	QueryParams GetAPIV1DonationsCryptoCalculateQueryParams
	Security    GetAPIV1DonationsCryptoCalculateSecurity
}

type GetAPIV1DonationsCryptoCalculateResponse struct {
	ContentType string
	StatusCode  int64
}
