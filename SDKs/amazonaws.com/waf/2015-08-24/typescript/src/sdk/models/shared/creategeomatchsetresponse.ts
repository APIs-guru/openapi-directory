import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GeoMatchSet } from "./geomatchset";


export class CreateGeoMatchSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken?: string;

  @Metadata({ data: "json, name=GeoMatchSet" })
  geoMatchSet?: GeoMatchSet;
}
