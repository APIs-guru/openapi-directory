import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GeoMatchSetUpdate } from "./geomatchsetupdate";



export class UpdateGeoMatchSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @SpeakeasyMetadata({ data: "json, name=GeoMatchSetId" })
  geoMatchSetId: string;

  @SpeakeasyMetadata({ data: "json, name=Updates", elemType: GeoMatchSetUpdate })
  updates: GeoMatchSetUpdate[];
}
