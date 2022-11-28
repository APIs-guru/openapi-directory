import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GsiDispatchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string;
}


// GsiDispatch200ApplicationJsonTimeframe
/** 
 * Evaluated timeframe for this request
**/
export class GsiDispatch200ApplicationJsonTimeframe extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;
}


export class GsiDispatch200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avg_distance_km" })
  avgDistanceKm?: number;

  @SpeakeasyMetadata({ data: "json, name=dispatch_from", elemType: shared.DispatchLocation })
  dispatchFrom?: shared.DispatchLocation[];

  @SpeakeasyMetadata({ data: "json, name=dispatch_target", elemType: shared.DispatchLocation })
  dispatchTarget?: shared.DispatchLocation[];

  @SpeakeasyMetadata({ data: "json, name=postmix" })
  postmix?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=premix" })
  premix?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=timeframe" })
  timeframe?: GsiDispatch200ApplicationJsonTimeframe;
}


export class GsiDispatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GsiDispatchQueryParams;
}


export class GsiDispatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  gsiDispatch200ApplicationJsonObject?: GsiDispatch200ApplicationJson;
}
