package shared

type Leg1 struct {
	DestinationAirportCode string `json:"destination_airport_code"`
	OriginAirportCode      string `json:"origin_airport_code"`
	TravelClass            string `json:"travel_class"`
}
