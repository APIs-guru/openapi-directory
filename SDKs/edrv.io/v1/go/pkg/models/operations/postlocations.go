package operations

type PostLocationsRequestBodyAddress struct {
	City            *string `json:"city"`
	Country         *string `json:"country"`
	PostalCode      *string `json:"postalCode"`
	StreetAndNumber *string `json:"streetAndNumber"`
}

type PostLocationsRequestBodyCoordinates struct {
	Latitude  *float64 `json:"latitude"`
	Longitude *float64 `json:"longitude"`
}

type PostLocationsRequestBody struct {
	Active         *bool                               `json:"active"`
	Address        PostLocationsRequestBodyAddress     `json:"address"`
	Chargestations []interface{}                       `json:"chargestations"`
	Coordinates    PostLocationsRequestBodyCoordinates `json:"coordinates"`
	OperatorName   string                              `json:"operatorName"`
}

type PostLocationsRequest struct {
	Request PostLocationsRequestBody `request:"mediaType=application/json"`
}

type PostLocations200ApplicationJSON struct {
	Message *string                `json:"message"`
	Ok      *bool                  `json:"ok"`
	Result  map[string]interface{} `json:"result"`
}

type PostLocationsResponse struct {
	ContentType                           string
	StatusCode                            int64
	PostLocations200ApplicationJSONObject *PostLocations200ApplicationJSON
}
