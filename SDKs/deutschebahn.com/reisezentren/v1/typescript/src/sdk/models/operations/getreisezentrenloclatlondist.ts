import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReisezentrenLocLatLonDistPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dist" })
  dist: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=lat" })
  lat: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=lon" })
  lon: number;
}


export class GetReisezentrenLocLatLonDistRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetReisezentrenLocLatLonDistPathParams;
}


export class GetReisezentrenLocLatLonDistResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  travelCenter?: shared.TravelCenter;
}
