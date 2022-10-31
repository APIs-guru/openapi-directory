package operations

import (
"time"
"openapi/pkg/models/shared")

type CalculateRoutePathParams struct {
    CalculatorName string `pathParam:"style=simple,explode=false,name=CalculatorName"`
    
}

type CalculateRouteHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CalculateRouteRequestBodyCarModeOptions struct {
    AvoidFerries *bool `json:"AvoidFerries,omitempty"`
    AvoidTolls *bool `json:"AvoidTolls,omitempty"`
    
}


type CalculateRouteRequestBodyDistanceUnitEnum string

const (
    CalculateRouteRequestBodyDistanceUnitEnumKilometers CalculateRouteRequestBodyDistanceUnitEnum = "Kilometers"
CalculateRouteRequestBodyDistanceUnitEnumMiles CalculateRouteRequestBodyDistanceUnitEnum = "Miles"
)



type CalculateRouteRequestBodyTravelModeEnum string

const (
    CalculateRouteRequestBodyTravelModeEnumCar CalculateRouteRequestBodyTravelModeEnum = "Car"
CalculateRouteRequestBodyTravelModeEnumTruck CalculateRouteRequestBodyTravelModeEnum = "Truck"
CalculateRouteRequestBodyTravelModeEnumWalking CalculateRouteRequestBodyTravelModeEnum = "Walking"
)


type CalculateRouteRequestBodyTruckModeOptions struct {
    AvoidFerries *bool `json:"AvoidFerries,omitempty"`
    AvoidTolls *bool `json:"AvoidTolls,omitempty"`
    Dimensions *shared.TruckDimensions `json:"Dimensions,omitempty"`
    Weight *shared.TruckWeight `json:"Weight,omitempty"`
    
}

type CalculateRouteRequestBody struct {
    CarModeOptions *CalculateRouteRequestBodyCarModeOptions `json:"CarModeOptions,omitempty"`
    DepartNow *bool `json:"DepartNow,omitempty"`
    DeparturePosition []float64 `json:"DeparturePosition"`
    DepartureTime *time.Time `json:"DepartureTime,omitempty"`
    DestinationPosition []float64 `json:"DestinationPosition"`
    DistanceUnit *CalculateRouteRequestBodyDistanceUnitEnum `json:"DistanceUnit,omitempty"`
    IncludeLegGeometry *bool `json:"IncludeLegGeometry,omitempty"`
    TravelMode *CalculateRouteRequestBodyTravelModeEnum `json:"TravelMode,omitempty"`
    TruckModeOptions *CalculateRouteRequestBodyTruckModeOptions `json:"TruckModeOptions,omitempty"`
    WaypointPositions [][]float64 `json:"WaypointPositions,omitempty"`
    
}

type CalculateRouteRequest struct {
    PathParams CalculateRoutePathParams 
    Headers CalculateRouteHeaders 
    Request CalculateRouteRequestBody `request:"mediaType=application/json"`
    
}

type CalculateRouteResponse struct {
    AccessDeniedException *interface{} 
    CalculateRouteResponse *shared.CalculateRouteResponse 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

