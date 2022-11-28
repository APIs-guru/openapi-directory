package operations

type GetDailyReportTotalsDateFormatEnum string

const (
	GetDailyReportTotalsDateFormatEnumYyyyMmDd GetDailyReportTotalsDateFormatEnum = "YYYY-MM-DD"
	GetDailyReportTotalsDateFormatEnumYyyyDdMm GetDailyReportTotalsDateFormatEnum = "YYYY-DD-MM"
	GetDailyReportTotalsDateFormatEnumDdMmYyyy GetDailyReportTotalsDateFormatEnum = "DD-MM-YYYY"
	GetDailyReportTotalsDateFormatEnumMmDdYyyy GetDailyReportTotalsDateFormatEnum = "MM-DD-YYYY"
)

type GetDailyReportTotalsFormatEnum string

const (
	GetDailyReportTotalsFormatEnumJSON GetDailyReportTotalsFormatEnum = "json"
	GetDailyReportTotalsFormatEnumXML  GetDailyReportTotalsFormatEnum = "xml"
)

type GetDailyReportTotalsQueryParams struct {
	Date       *string                             `queryParam:"style=form,explode=true,name=date"`
	DateFormat *GetDailyReportTotalsDateFormatEnum `queryParam:"style=form,explode=true,name=date-format"`
	Format     *GetDailyReportTotalsFormatEnum     `queryParam:"style=form,explode=true,name=format"`
}

type GetDailyReportTotals200ApplicationJSON struct {
	Active    *int64  `json:"active,omitempty"`
	Confirmed *int64  `json:"confirmed,omitempty"`
	Critical  *int64  `json:"critical,omitempty"`
	Date      *string `json:"date,omitempty"`
	Deaths    *int64  `json:"deaths,omitempty"`
	Recovered *int64  `json:"recovered,omitempty"`
}

type GetDailyReportTotalsRequest struct {
	QueryParams GetDailyReportTotalsQueryParams
}

type GetDailyReportTotalsResponse struct {
	Body                                          []byte
	ContentType                                   string
	StatusCode                                    int64
	GetDailyReportTotals200ApplicationJSONObjects []GetDailyReportTotals200ApplicationJSON
}
