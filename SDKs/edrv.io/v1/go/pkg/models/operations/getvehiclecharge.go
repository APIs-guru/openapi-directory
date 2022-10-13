package operations

type GetVehicleChargePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetVehicleChargeRequest struct {
	PathParams GetVehicleChargePathParams
}

type GetVehicleChargeResponse struct {
	ContentType string
	StatusCode  int64
}
