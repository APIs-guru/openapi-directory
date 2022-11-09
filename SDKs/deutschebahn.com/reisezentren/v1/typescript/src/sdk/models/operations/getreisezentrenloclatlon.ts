import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReisezentrenLocLatLonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=lat" })
  lat: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=lon" })
  lon: number;
}


export class GetReisezentrenLocLatLonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetReisezentrenLocLatLonPathParams;
}


export class GetReisezentrenLocLatLonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  travelCenter?: shared.TravelCenter;
}
