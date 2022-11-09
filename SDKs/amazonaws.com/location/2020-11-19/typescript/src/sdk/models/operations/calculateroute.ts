import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CalculateRoutePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CalculatorName" })
  calculatorName: string;
}


export class CalculateRouteHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CalculateRouteRequestBodyCarModeOptions
/** 
 * Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Car</code>.
**/
export class CalculateRouteRequestBodyCarModeOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvoidFerries" })
  avoidFerries?: boolean;

  @Metadata({ data: "json, name=AvoidTolls" })
  avoidTolls?: boolean;
}

export enum CalculateRouteRequestBodyDistanceUnitEnum {
    Kilometers = "Kilometers"
,    Miles = "Miles"
}

export enum CalculateRouteRequestBodyTravelModeEnum {
    Car = "Car"
,    Truck = "Truck"
,    Walking = "Walking"
}


// CalculateRouteRequestBodyTruckModeOptions
/** 
 * Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Truck</code>.
**/
export class CalculateRouteRequestBodyTruckModeOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvoidFerries" })
  avoidFerries?: boolean;

  @Metadata({ data: "json, name=AvoidTolls" })
  avoidTolls?: boolean;

  @Metadata({ data: "json, name=Dimensions" })
  dimensions?: shared.TruckDimensions;

  @Metadata({ data: "json, name=Weight" })
  weight?: shared.TruckWeight;
}


export class CalculateRouteRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=CarModeOptions" })
  carModeOptions?: CalculateRouteRequestBodyCarModeOptions;

  @Metadata({ data: "json, name=DepartNow" })
  departNow?: boolean;

  @Metadata({ data: "json, name=DeparturePosition" })
  departurePosition: number[];

  @Metadata({ data: "json, name=DepartureTime" })
  departureTime?: Date;

  @Metadata({ data: "json, name=DestinationPosition" })
  destinationPosition: number[];

  @Metadata({ data: "json, name=DistanceUnit" })
  distanceUnit?: CalculateRouteRequestBodyDistanceUnitEnum;

  @Metadata({ data: "json, name=IncludeLegGeometry" })
  includeLegGeometry?: boolean;

  @Metadata({ data: "json, name=TravelMode" })
  travelMode?: CalculateRouteRequestBodyTravelModeEnum;

  @Metadata({ data: "json, name=TruckModeOptions" })
  truckModeOptions?: CalculateRouteRequestBodyTruckModeOptions;

  @Metadata({ data: "json, name=WaypointPositions" })
  waypointPositions?: number[][];
}


export class CalculateRouteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CalculateRoutePathParams;

  @Metadata()
  headers: CalculateRouteHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CalculateRouteRequestBody;
}


export class CalculateRouteResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  calculateRouteResponse?: shared.CalculateRouteResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
