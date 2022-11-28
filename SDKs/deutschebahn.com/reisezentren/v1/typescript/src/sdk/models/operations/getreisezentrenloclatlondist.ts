import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetReisezentrenLocLatLonDistPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dist" })
  dist: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lat" })
  lat: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lon" })
  lon: number;
}


export class GetReisezentrenLocLatLonDistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetReisezentrenLocLatLonDistPathParams;
}


export class GetReisezentrenLocLatLonDistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  travelCenter?: shared.TravelCenter;
}
