package operations

var AirtravelCoordinatesServers = []string{
	"http://api.climatekuul.com:8000/footprint",
}

type AirtravelCoordinatesHeaders struct {
	ContentType string `header:"style=simple,explode=false,name=Content-Type"`
}

type AirtravelCoordinatesRequestBody struct {
	APIKeyL1                    string  `form:"name=apiKey_l1"`
	APIKeyL2                    string  `form:"name=apiKey_l2"`
	DestinationAirportLatitude  float64 `form:"name=destination_airport_latitude"`
	DestinationAirportLongitude float64 `form:"name=destination_airport_longitude"`
	NumberOfPassengers          int32   `form:"name=number_of_passengers"`
	OriginAirportLatitude       float64 `form:"name=origin_airport_latitude"`
	OriginAirportLongitude      float64 `form:"name=origin_airport_longitude"`
	TravelClass                 string  `form:"name=travel_class"`
	TravelMode                  string  `form:"name=travel_mode"`
}

type AirtravelCoordinatesRequest struct {
	ServerURL *string
	Headers   AirtravelCoordinatesHeaders
	Request   *AirtravelCoordinatesRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type AirtravelCoordinatesResponse struct {
	ContentType string
	StatusCode  int64
}
