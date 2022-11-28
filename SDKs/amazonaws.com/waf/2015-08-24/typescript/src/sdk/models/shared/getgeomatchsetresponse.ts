import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GeoMatchSet } from "./geomatchset";



export class GetGeoMatchSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GeoMatchSet" })
  geoMatchSet?: GeoMatchSet;
}
