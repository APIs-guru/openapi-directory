package operations

import (
"openapi/pkg/models/shared")


type GetAPIV1DonationsCarbonCalculateTransportationMethodEnum string

const (
    GetAPIV1DonationsCarbonCalculateTransportationMethodEnumAir GetAPIV1DonationsCarbonCalculateTransportationMethodEnum = "air"
GetAPIV1DonationsCarbonCalculateTransportationMethodEnumTruck GetAPIV1DonationsCarbonCalculateTransportationMethodEnum = "truck"
GetAPIV1DonationsCarbonCalculateTransportationMethodEnumRail GetAPIV1DonationsCarbonCalculateTransportationMethodEnum = "rail"
GetAPIV1DonationsCarbonCalculateTransportationMethodEnumSea GetAPIV1DonationsCarbonCalculateTransportationMethodEnum = "sea"
)


type GetAPIV1DonationsCarbonCalculateQueryParams struct {
    DestinationAddress *float64 `queryParam:"style=form,explode=true,name=destination_address"`
    DistanceMi *float64 `queryParam:"style=form,explode=true,name=distance_mi"`
    OriginAddress *float64 `queryParam:"style=form,explode=true,name=origin_address"`
    TransportationMethod *GetAPIV1DonationsCarbonCalculateTransportationMethodEnum `queryParam:"style=form,explode=true,name=transportation_method"`
    WeightLb float64 `queryParam:"style=form,explode=true,name=weight_lb"`
    
}

type GetAPIV1DonationsCarbonCalculateSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type GetAPIV1DonationsCarbonCalculateRequest struct {
    QueryParams GetAPIV1DonationsCarbonCalculateQueryParams 
    Security GetAPIV1DonationsCarbonCalculateSecurity 
    
}

type GetAPIV1DonationsCarbonCalculateResponse struct {
    ContentType string 
    StatusCode int64 
    
}

