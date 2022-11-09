import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GeoMatchSetUpdate } from "./geomatchsetupdate";


export class UpdateGeoMatchSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @Metadata({ data: "json, name=GeoMatchSetId" })
  geoMatchSetId: string;

  @Metadata({ data: "json, name=Updates", elemType: shared.GeoMatchSetUpdate })
  updates: GeoMatchSetUpdate[];
}
