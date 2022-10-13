package operations

var EcommerceDeliveryServers = []string{
	"http://api.climatekuul.com:8000/footprint",
}

type EcommerceDeliveryHeaders struct {
	ContentType string `header:"style=simple,explode=true,name=Content-Type"`
}

type EcommerceDeliveryRequestBody struct {
	APIKeyL1               string  `form:"name=apiKey_l1"`
	APIKeyL2               string  `form:"name=apiKey_l2"`
	DestinationAirportCode *string `form:"name=destination_airport_code"`
	DestinationLatitude    float64 `form:"name=destination_latitude"`
	DestinationLongitude   float64 `form:"name=destination_longitude"`
	OriginAirportCode      *string `form:"name=origin_airport_code"`
	OriginLatitude         float64 `form:"name=origin_latitude"`
	OriginLongitude        float64 `form:"name=origin_longitude"`
	VolumetricWeight       float64 `form:"name=volumetric_weight"`
	WaybillType            string  `form:"name=waybill_type"`
}

type EcommerceDeliveryRequest struct {
	ServerURL *string
	Headers   EcommerceDeliveryHeaders
	Request   *EcommerceDeliveryRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type EcommerceDeliveryResponse struct {
	ContentType string
	StatusCode  int64
}
