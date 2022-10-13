package operations

type GetDailyReportAllCountriesDateFormatEnum string

const (
	GetDailyReportAllCountriesDateFormatEnumYyyyMmDd GetDailyReportAllCountriesDateFormatEnum = "YYYY-MM-DD"
	GetDailyReportAllCountriesDateFormatEnumYyyyDdMm GetDailyReportAllCountriesDateFormatEnum = "YYYY-DD-MM"
	GetDailyReportAllCountriesDateFormatEnumDdMmYyyy GetDailyReportAllCountriesDateFormatEnum = "DD-MM-YYYY"
	GetDailyReportAllCountriesDateFormatEnumMmDdYyyy GetDailyReportAllCountriesDateFormatEnum = "MM-DD-YYYY"
)

type GetDailyReportAllCountriesFormatEnum string

const (
	GetDailyReportAllCountriesFormatEnumJSON GetDailyReportAllCountriesFormatEnum = "json"
	GetDailyReportAllCountriesFormatEnumXML  GetDailyReportAllCountriesFormatEnum = "xml"
)

type GetDailyReportAllCountriesQueryParams struct {
	Date       string                                    `queryParam:"style=form,explode=true,name=date"`
	DateFormat *GetDailyReportAllCountriesDateFormatEnum `queryParam:"style=form,explode=true,name=date-format"`
	Format     *GetDailyReportAllCountriesFormatEnum     `queryParam:"style=form,explode=true,name=format"`
}

type GetDailyReportAllCountriesRequest struct {
	QueryParams GetDailyReportAllCountriesQueryParams
}

type GetDailyReportAllCountries200ApplicationJSONProvince struct {
	Active    *int64 `json:"active"`
	Confirmed *int64 `json:"confirmed"`
	Deaths    *int64 `json:"deaths"`
	Recovered *int64 `json:"recovered"`
}

type GetDailyReportAllCountries200ApplicationJSON struct {
	Country   *string                                                `json:"country"`
	Date      *string                                                `json:"date"`
	Latitude  *float32                                               `json:"latitude"`
	Longitude *float32                                               `json:"longitude"`
	Province  []GetDailyReportAllCountries200ApplicationJSONProvince `json:"province"`
}

type GetDailyReportAllCountriesResponse struct {
	Body                                                []byte
	ContentType                                         string
	StatusCode                                          int64
	GetDailyReportAllCountries200ApplicationJSONObjects []GetDailyReportAllCountries200ApplicationJSON
}
