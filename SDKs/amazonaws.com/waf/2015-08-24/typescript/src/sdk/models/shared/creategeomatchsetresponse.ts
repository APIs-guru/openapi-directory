import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GeoMatchSet } from "./geomatchset";



export class CreateGeoMatchSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;

  @SpeakeasyMetadata({ data: "json, name=GeoMatchSet" })
  geoMatchSet?: GeoMatchSet;
}
