import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGeoMatchSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=GeoMatchSetId" })
  geoMatchSetId: string;
}
