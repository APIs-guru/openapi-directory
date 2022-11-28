package operations

var UrbanDeliveryServerList = []string{
	"http://api.climatekuul.com:8000/footprint",
}

type UrbanDeliveryRequestBody struct {
	APIKeyL1             string  `form:"name=apiKey_l1"`
	APIKeyL2             string  `form:"name=apiKey_l2"`
	DestinationLatitude  float64 `form:"name=destination_latitude"`
	DestinationLongitude float64 `form:"name=destination_longitude"`
	ItemCount            int32   `form:"name=item_count"`
	OriginLatitude       float64 `form:"name=origin_latitude"`
	OriginLongitude      float64 `form:"name=origin_longitude"`
	VehicleType          string  `form:"name=vehicle_type"`
}

type UrbanDeliveryRequest struct {
	ServerURL *string
	Request   *UrbanDeliveryRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type UrbanDeliveryResponse struct {
	ContentType string
	StatusCode  int64
}
