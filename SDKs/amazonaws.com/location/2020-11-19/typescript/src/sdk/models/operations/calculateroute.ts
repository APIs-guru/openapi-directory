import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CalculateRoutePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CalculatorName" })
  calculatorName: string;
}


export class CalculateRouteHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CalculateRouteRequestBodyCarModeOptions
/** 
 * Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Car</code>.
**/
export class CalculateRouteRequestBodyCarModeOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvoidFerries" })
  avoidFerries?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AvoidTolls" })
  avoidTolls?: boolean;
}

export enum CalculateRouteRequestBodyDistanceUnitEnum {
    Kilometers = "Kilometers",
    Miles = "Miles"
}

export enum CalculateRouteRequestBodyTravelModeEnum {
    Car = "Car",
    Truck = "Truck",
    Walking = "Walking"
}


// CalculateRouteRequestBodyTruckModeOptions
/** 
 * Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Truck</code>.
**/
export class CalculateRouteRequestBodyTruckModeOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvoidFerries" })
  avoidFerries?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AvoidTolls" })
  avoidTolls?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Dimensions" })
  dimensions?: shared.TruckDimensions;

  @SpeakeasyMetadata({ data: "json, name=Weight" })
  weight?: shared.TruckWeight;
}


export class CalculateRouteRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CarModeOptions" })
  carModeOptions?: CalculateRouteRequestBodyCarModeOptions;

  @SpeakeasyMetadata({ data: "json, name=DepartNow" })
  departNow?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DeparturePosition" })
  departurePosition: number[];

  @SpeakeasyMetadata({ data: "json, name=DepartureTime" })
  departureTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DestinationPosition" })
  destinationPosition: number[];

  @SpeakeasyMetadata({ data: "json, name=DistanceUnit" })
  distanceUnit?: CalculateRouteRequestBodyDistanceUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=IncludeLegGeometry" })
  includeLegGeometry?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TravelMode" })
  travelMode?: CalculateRouteRequestBodyTravelModeEnum;

  @SpeakeasyMetadata({ data: "json, name=TruckModeOptions" })
  truckModeOptions?: CalculateRouteRequestBodyTruckModeOptions;

  @SpeakeasyMetadata({ data: "json, name=WaypointPositions" })
  waypointPositions?: number[][];
}


export class CalculateRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CalculateRoutePathParams;

  @SpeakeasyMetadata()
  headers: CalculateRouteHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CalculateRouteRequestBody;
}


export class CalculateRouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  calculateRouteResponse?: shared.CalculateRouteResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
