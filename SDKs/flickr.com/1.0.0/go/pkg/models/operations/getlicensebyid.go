package operations

type GetLicenseByIDQueryParams struct {
	APIKey string `queryParam:"style=form,explode=true,name=api_key"`
}

type GetLicenseByID200ApplicationJSONLicensesLicense struct {
	ID   *int64  `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	URL  *string `json:"url,omitempty"`
}

type GetLicenseByID200ApplicationJSONLicenses struct {
	License []GetLicenseByID200ApplicationJSONLicensesLicense `json:"license,omitempty"`
}

type GetLicenseByID200ApplicationJSON struct {
	Licenses *GetLicenseByID200ApplicationJSONLicenses `json:"licenses,omitempty"`
	Stat     *string                                   `json:"stat,omitempty"`
}

type GetLicenseByIDRequest struct {
	QueryParams GetLicenseByIDQueryParams
}

type GetLicenseByIDResponse struct {
	ContentType                            string
	StatusCode                             int64
	GetLicenseByID200ApplicationJSONObject *GetLicenseByID200ApplicationJSON
}
