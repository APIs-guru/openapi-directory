package operations

var RoadDistanceServers = []string{
	"http://api.climatekuul.com:8000/footprint",
}

type RoadDistanceRequestBody struct {
	APIKeyL1       string  `form:"name=apiKey_l1"`
	APIKeyL2       string  `form:"name=apiKey_l2"`
	TravelDistance int32   `form:"name=travel_distance"`
	TripEnd        int32   `form:"name=trip_end"`
	TripStart      int32   `form:"name=trip_start"`
	VehicleMake    *string `form:"name=vehicle_make"`
	VehicleType    string  `form:"name=vehicle_type"`
	VehicleYear    *int32  `form:"name=vehicle_year"`
}

type RoadDistanceRequest struct {
	ServerURL *string
	Request   *RoadDistanceRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type RoadDistanceResponse struct {
	ContentType string
	StatusCode  int64
}
