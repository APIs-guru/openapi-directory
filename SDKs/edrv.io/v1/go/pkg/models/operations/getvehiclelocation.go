package operations

type GetVehicleLocationPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetVehicleLocationRequest struct {
	PathParams GetVehicleLocationPathParams
}

type GetVehicleLocationResponse struct {
	ContentType string
	StatusCode  int64
}
