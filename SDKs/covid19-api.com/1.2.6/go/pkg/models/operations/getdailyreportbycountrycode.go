package operations

type GetDailyReportByCountryCodeDateFormatEnum string

const (
	GetDailyReportByCountryCodeDateFormatEnumYyyyMmDd GetDailyReportByCountryCodeDateFormatEnum = "YYYY-MM-DD"
	GetDailyReportByCountryCodeDateFormatEnumYyyyDdMm GetDailyReportByCountryCodeDateFormatEnum = "YYYY-DD-MM"
	GetDailyReportByCountryCodeDateFormatEnumDdMmYyyy GetDailyReportByCountryCodeDateFormatEnum = "DD-MM-YYYY"
	GetDailyReportByCountryCodeDateFormatEnumMmDdYyyy GetDailyReportByCountryCodeDateFormatEnum = "MM-DD-YYYY"
)

type GetDailyReportByCountryCodeFormatEnum string

const (
	GetDailyReportByCountryCodeFormatEnumJSON GetDailyReportByCountryCodeFormatEnum = "json"
	GetDailyReportByCountryCodeFormatEnumXML  GetDailyReportByCountryCodeFormatEnum = "xml"
)

type GetDailyReportByCountryCodeQueryParams struct {
	Code       string                                     `queryParam:"style=form,explode=true,name=code"`
	Date       string                                     `queryParam:"style=form,explode=true,name=date"`
	DateFormat *GetDailyReportByCountryCodeDateFormatEnum `queryParam:"style=form,explode=true,name=date-format"`
	Format     *GetDailyReportByCountryCodeFormatEnum     `queryParam:"style=form,explode=true,name=format"`
}

type GetDailyReportByCountryCodeRequest struct {
	QueryParams GetDailyReportByCountryCodeQueryParams
}

type GetDailyReportByCountryCode200ApplicationJSONProvince struct {
	Active    *int64 `json:"active"`
	Confirmed *int64 `json:"confirmed"`
	Deaths    *int64 `json:"deaths"`
	Recovered *int64 `json:"recovered"`
}

type GetDailyReportByCountryCode200ApplicationJSON struct {
	Country   *string                                                 `json:"country"`
	Date      *string                                                 `json:"date"`
	Latitude  *float32                                                `json:"latitude"`
	Longitude *float32                                                `json:"longitude"`
	Province  []GetDailyReportByCountryCode200ApplicationJSONProvince `json:"province"`
}

type GetDailyReportByCountryCodeResponse struct {
	Body                                                 []byte
	ContentType                                          string
	StatusCode                                           int64
	GetDailyReportByCountryCode200ApplicationJSONObjects []GetDailyReportByCountryCode200ApplicationJSON
}
