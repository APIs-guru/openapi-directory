package operations

type GetListOfCountriesFormatEnum string

const (
	GetListOfCountriesFormatEnumJSON GetListOfCountriesFormatEnum = "json"
	GetListOfCountriesFormatEnumXML  GetListOfCountriesFormatEnum = "xml"
)

type GetListOfCountriesQueryParams struct {
	Format *GetListOfCountriesFormatEnum `queryParam:"style=form,explode=true,name=format"`
}

type GetListOfCountriesRequest struct {
	QueryParams GetListOfCountriesQueryParams
}

type GetListOfCountries200ApplicationJSON struct {
	Alpha2Code *string  `json:"alpha-2-code"`
	Alpha3Code *string  `json:"alpha-3-code"`
	Latitude   *float32 `json:"latitude"`
	Longitude  *float32 `json:"longitude"`
	Name       *string  `json:"name"`
}

type GetListOfCountriesResponse struct {
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	GetListOfCountries200ApplicationJSONObjects []GetListOfCountries200ApplicationJSON
}
