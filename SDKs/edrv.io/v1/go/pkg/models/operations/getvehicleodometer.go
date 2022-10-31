package operations



type GetVehicleOdometerPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetVehicleOdometerRequest struct {
    PathParams GetVehicleOdometerPathParams 
    
}

type GetVehicleOdometerResponse struct {
    ContentType string 
    StatusCode int64 
    
}

