package operations

type GetVehicleBatteryPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetVehicleBatteryRequest struct {
	PathParams GetVehicleBatteryPathParams
}

type GetVehicleBatteryResponse struct {
	ContentType string
	StatusCode  int64
}
