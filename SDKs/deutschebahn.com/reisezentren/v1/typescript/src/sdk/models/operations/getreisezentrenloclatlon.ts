import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetReisezentrenLocLatLonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lat" })
  lat: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lon" })
  lon: number;
}


export class GetReisezentrenLocLatLonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetReisezentrenLocLatLonPathParams;
}


export class GetReisezentrenLocLatLonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  travelCenter?: shared.TravelCenter;
}
