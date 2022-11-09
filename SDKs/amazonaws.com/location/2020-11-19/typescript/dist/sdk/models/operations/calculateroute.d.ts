import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CalculateRoutePathParams extends SpeakeasyBase {
    calculatorName: string;
}
export declare class CalculateRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Car</code>.
**/
export declare class CalculateRouteRequestBodyCarModeOptions extends SpeakeasyBase {
    avoidFerries?: boolean;
    avoidTolls?: boolean;
}
export declare enum CalculateRouteRequestBodyDistanceUnitEnum {
    Kilometers = "Kilometers",
    Miles = "Miles"
}
export declare enum CalculateRouteRequestBodyTravelModeEnum {
    Car = "Car",
    Truck = "Truck",
    Walking = "Walking"
}
/**
 * Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Truck</code>.
**/
export declare class CalculateRouteRequestBodyTruckModeOptions extends SpeakeasyBase {
    avoidFerries?: boolean;
    avoidTolls?: boolean;
    dimensions?: shared.TruckDimensions;
    weight?: shared.TruckWeight;
}
export declare class CalculateRouteRequestBody extends SpeakeasyBase {
    carModeOptions?: CalculateRouteRequestBodyCarModeOptions;
    departNow?: boolean;
    departurePosition: number[];
    departureTime?: Date;
    destinationPosition: number[];
    distanceUnit?: CalculateRouteRequestBodyDistanceUnitEnum;
    includeLegGeometry?: boolean;
    travelMode?: CalculateRouteRequestBodyTravelModeEnum;
    truckModeOptions?: CalculateRouteRequestBodyTruckModeOptions;
    waypointPositions?: number[][];
}
export declare class CalculateRouteRequest extends SpeakeasyBase {
    pathParams: CalculateRoutePathParams;
    headers: CalculateRouteHeaders;
    request: CalculateRouteRequestBody;
}
export declare class CalculateRouteResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    calculateRouteResponse?: shared.CalculateRouteResponse;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
