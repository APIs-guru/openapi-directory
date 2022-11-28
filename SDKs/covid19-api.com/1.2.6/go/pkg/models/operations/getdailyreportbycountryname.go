package operations

type GetDailyReportByCountryNameDateFormatEnum string

const (
	GetDailyReportByCountryNameDateFormatEnumYyyyMmDd GetDailyReportByCountryNameDateFormatEnum = "YYYY-MM-DD"
	GetDailyReportByCountryNameDateFormatEnumYyyyDdMm GetDailyReportByCountryNameDateFormatEnum = "YYYY-DD-MM"
	GetDailyReportByCountryNameDateFormatEnumDdMmYyyy GetDailyReportByCountryNameDateFormatEnum = "DD-MM-YYYY"
	GetDailyReportByCountryNameDateFormatEnumMmDdYyyy GetDailyReportByCountryNameDateFormatEnum = "MM-DD-YYYY"
)

type GetDailyReportByCountryNameFormatEnum string

const (
	GetDailyReportByCountryNameFormatEnumJSON GetDailyReportByCountryNameFormatEnum = "json"
	GetDailyReportByCountryNameFormatEnumXML  GetDailyReportByCountryNameFormatEnum = "xml"
)

type GetDailyReportByCountryNameQueryParams struct {
	Date       string                                     `queryParam:"style=form,explode=true,name=date"`
	DateFormat *GetDailyReportByCountryNameDateFormatEnum `queryParam:"style=form,explode=true,name=date-format"`
	Format     *GetDailyReportByCountryNameFormatEnum     `queryParam:"style=form,explode=true,name=format"`
	Name       string                                     `queryParam:"style=form,explode=true,name=name"`
}

type GetDailyReportByCountryName200ApplicationJSONProvince struct {
	Active    *int64 `json:"active,omitempty"`
	Confirmed *int64 `json:"confirmed,omitempty"`
	Deaths    *int64 `json:"deaths,omitempty"`
	Recovered *int64 `json:"recovered,omitempty"`
}

type GetDailyReportByCountryName200ApplicationJSON struct {
	Country   *string                                                 `json:"country,omitempty"`
	Date      *string                                                 `json:"date,omitempty"`
	Latitude  *float32                                                `json:"latitude,omitempty"`
	Longitude *float32                                                `json:"longitude,omitempty"`
	Province  []GetDailyReportByCountryName200ApplicationJSONProvince `json:"province,omitempty"`
}

type GetDailyReportByCountryNameRequest struct {
	QueryParams GetDailyReportByCountryNameQueryParams
}

type GetDailyReportByCountryNameResponse struct {
	Body                                                 []byte
	ContentType                                          string
	StatusCode                                           int64
	GetDailyReportByCountryName200ApplicationJSONObjects []GetDailyReportByCountryName200ApplicationJSON
}
