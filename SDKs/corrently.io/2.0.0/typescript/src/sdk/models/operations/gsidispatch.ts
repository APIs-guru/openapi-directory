import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GsiDispatchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string;
}


export class GsiDispatchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GsiDispatchQueryParams;
}


// GsiDispatch200ApplicationJsonTimeframe
/** 
 * Evaluated timeframe for this request
**/
export class GsiDispatch200ApplicationJsonTimeframe extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=start" })
  start?: number;
}


export class GsiDispatch200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=avg_distance_km" })
  avgDistanceKm?: number;

  @Metadata({ data: "json, name=dispatch_from", elemType: shared.DispatchLocation })
  dispatchFrom?: shared.DispatchLocation[];

  @Metadata({ data: "json, name=dispatch_target", elemType: shared.DispatchLocation })
  dispatchTarget?: shared.DispatchLocation[];

  @Metadata({ data: "json, name=postmix" })
  postmix?: Map<string, any>;

  @Metadata({ data: "json, name=premix" })
  premix?: Map<string, any>;

  @Metadata({ data: "json, name=timeframe" })
  timeframe?: GsiDispatch200ApplicationJsonTimeframe;
}


export class GsiDispatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  gsiDispatch200ApplicationJsonObject?: GsiDispatch200ApplicationJson;
}
