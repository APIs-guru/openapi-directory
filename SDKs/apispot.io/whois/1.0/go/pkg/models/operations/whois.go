package operations

type WhoisPathParams struct {
	Domain string `pathParam:"style=simple,explode=false,name=domain"`
}

type WhoisFormatEnum string

const (
	WhoisFormatEnumRaw       WhoisFormatEnum = "raw"
	WhoisFormatEnumFormatted WhoisFormatEnum = "formatted"
	WhoisFormatEnumJSON      WhoisFormatEnum = "json"
)

type WhoisQueryParams struct {
	Format *WhoisFormatEnum `queryParam:"style=form,explode=true,name=format"`
}

type WhoisRequest struct {
	PathParams  WhoisPathParams
	QueryParams WhoisQueryParams
}

type WhoisResponse struct {
	ContentType string
	StatusCode  int64
}
