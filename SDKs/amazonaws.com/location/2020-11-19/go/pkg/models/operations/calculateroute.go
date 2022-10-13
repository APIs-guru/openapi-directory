package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type CalculateRoutePathParams struct {
	CalculatorName string `pathParam:"style=simple,explode=false,name=CalculatorName"`
}

type CalculateRouteHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CalculateRouteRequestBodyCarModeOptions struct {
	AvoidFerries *bool `json:"AvoidFerries"`
	AvoidTolls   *bool `json:"AvoidTolls"`
}

type CalculateRouteRequestBodyDistanceUnitEnum string

const (
	CalculateRouteRequestBodyDistanceUnitEnumKilometers CalculateRouteRequestBodyDistanceUnitEnum = "Kilometers"
	CalculateRouteRequestBodyDistanceUnitEnumMiles      CalculateRouteRequestBodyDistanceUnitEnum = "Miles"
)

type CalculateRouteRequestBodyTravelModeEnum string

const (
	CalculateRouteRequestBodyTravelModeEnumCar     CalculateRouteRequestBodyTravelModeEnum = "Car"
	CalculateRouteRequestBodyTravelModeEnumTruck   CalculateRouteRequestBodyTravelModeEnum = "Truck"
	CalculateRouteRequestBodyTravelModeEnumWalking CalculateRouteRequestBodyTravelModeEnum = "Walking"
)

type CalculateRouteRequestBodyTruckModeOptions struct {
	AvoidFerries *bool                   `json:"AvoidFerries"`
	AvoidTolls   *bool                   `json:"AvoidTolls"`
	Dimensions   *shared.TruckDimensions `json:"Dimensions"`
	Weight       *shared.TruckWeight     `json:"Weight"`
}

type CalculateRouteRequestBody struct {
	CarModeOptions      *CalculateRouteRequestBodyCarModeOptions   `json:"CarModeOptions"`
	DepartNow           *bool                                      `json:"DepartNow"`
	DeparturePosition   []float64                                  `json:"DeparturePosition"`
	DepartureTime       *time.Time                                 `json:"DepartureTime"`
	DestinationPosition []float64                                  `json:"DestinationPosition"`
	DistanceUnit        *CalculateRouteRequestBodyDistanceUnitEnum `json:"DistanceUnit"`
	IncludeLegGeometry  *bool                                      `json:"IncludeLegGeometry"`
	TravelMode          *CalculateRouteRequestBodyTravelModeEnum   `json:"TravelMode"`
	TruckModeOptions    *CalculateRouteRequestBodyTruckModeOptions `json:"TruckModeOptions"`
	WaypointPositions   [][]float64                                `json:"WaypointPositions"`
}

type CalculateRouteRequest struct {
	PathParams CalculateRoutePathParams
	Headers    CalculateRouteHeaders
	Request    CalculateRouteRequestBody `request:"mediaType=application/json"`
}

type CalculateRouteResponse struct {
	AccessDeniedException     *interface{}
	CalculateRouteResponse    *shared.CalculateRouteResponse
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
