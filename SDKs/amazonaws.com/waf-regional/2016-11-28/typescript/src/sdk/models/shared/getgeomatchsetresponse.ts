import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GeoMatchSet } from "./geomatchset";


export class GetGeoMatchSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=GeoMatchSet" })
  geoMatchSet?: GeoMatchSet;
}
