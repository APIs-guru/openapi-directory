package operations

type GetLicenseByIDQueryParams struct {
	APIKey string `queryParam:"style=form,explode=true,name=api_key"`
}

type GetLicenseByIDRequest struct {
	QueryParams GetLicenseByIDQueryParams
}

type GetLicenseByID200ApplicationJSONLicensesLicense struct {
	ID   *int64  `json:"id"`
	Name *string `json:"name"`
	URL  *string `json:"url"`
}

type GetLicenseByID200ApplicationJSONLicenses struct {
	License []GetLicenseByID200ApplicationJSONLicensesLicense `json:"license"`
}

type GetLicenseByID200ApplicationJSON struct {
	Licenses *GetLicenseByID200ApplicationJSONLicenses `json:"licenses"`
	Stat     *string                                   `json:"stat"`
}

type GetLicenseByIDResponse struct {
	ContentType                            string
	StatusCode                             int64
	GetLicenseByID200ApplicationJSONObject *GetLicenseByID200ApplicationJSON
}
