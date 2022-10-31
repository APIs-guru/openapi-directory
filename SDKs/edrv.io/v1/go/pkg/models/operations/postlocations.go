package operations

type PostLocationsRequestBodyAddress struct {
	City            *string `json:"city,omitempty"`
	Country         *string `json:"country,omitempty"`
	PostalCode      *string `json:"postalCode,omitempty"`
	StreetAndNumber *string `json:"streetAndNumber,omitempty"`
}

type PostLocationsRequestBodyCoordinates struct {
	Latitude  *float64 `json:"latitude,omitempty"`
	Longitude *float64 `json:"longitude,omitempty"`
}

type PostLocationsRequestBody struct {
	Active         *bool                               `json:"active,omitempty"`
	Address        PostLocationsRequestBodyAddress     `json:"address"`
	Chargestations []interface{}                       `json:"chargestations,omitempty"`
	Coordinates    PostLocationsRequestBodyCoordinates `json:"coordinates"`
	OperatorName   string                              `json:"operatorName"`
}

type PostLocationsRequest struct {
	Request PostLocationsRequestBody `request:"mediaType=application/json"`
}

type PostLocations200ApplicationJSON struct {
	Message *string                `json:"message,omitempty"`
	Ok      *bool                  `json:"ok,omitempty"`
	Result  map[string]interface{} `json:"result,omitempty"`
}

type PostLocationsResponse struct {
	ContentType                           string
	StatusCode                            int64
	PostLocations200ApplicationJSONObject *PostLocations200ApplicationJSON
}
